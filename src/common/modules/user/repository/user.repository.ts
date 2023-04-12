// Imports by libraries
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

// Imports by routes
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { User } from '../entity/user.entity';
import { PublicUserDetails, UserId } from '../interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
import { CreateGoogleUserDto } from '../dtos/createGoogleUser.dto';
import { RegisterType, Status } from '../types/user.types';
import { UpdateGoogleUserDto } from '../dtos/updateGoogleUser.dto';
import { Membership } from '../../membership/entity/membership.entity';
import { Role } from '../../role/entity/role.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    private jwtService: JwtService,
  ) { }
  // Create mannual user in db
  // Manual user
  async createUser(createUserDto: CreateUserDto) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        isAgreeToTermsAndConditions,
        verification_code,
      } = createUserDto;

      const role = await this.roleRepository.findOneBy({
        name: 'user',
      });

      const user = this.userRepository.create({
        first_name,
        last_name,
        email,
        password,
        isAgreeToTermsAndConditions,
        verification_code,
        role,
      });

      const createdUser = await this.userRepository.save(user);
      return createdUser;
    } catch (err) {
      console.log(err);
    }
  }

  // Find user by user id
  async findById(id: number): Promise<User> {
    try {
      return await this.userRepository.findOneBy({
        id: id,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Find the user by email
  async findByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.findOneBy({ email });
    } catch (err) {
      console.log(err);
    }
  }

  // Find by id with relationships
  async findByIdWithRelationships(id: number): Promise<User> {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.role', 'role')
        .leftJoinAndSelect('user.membership', 'membership')
        .leftJoinAndSelect(
          'user.user_coin_review_polls',
          'user_coin_review_polls',
        )
        .leftJoinAndSelect('user.user_video_polls', 'user_video_polls')
        .leftJoinAndSelect('user.payments', 'payments')
        .leftJoinAndSelect('user.vouchers', 'vouchers')
        .leftJoinAndSelect('user.gifts', 'gifts')
        .where('user.id = :id', { id })
        .getOne();

      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }

      return user;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Failed to find user');
    }
  }

  // Find the user by userName
  async findByUsername(username: string): Promise<User> {
    try {
      return await this.userRepository.findOneBy({ username });
    } catch (err) {
      console.log(err);
    }
  }

  // Update user by id
  async updateById(id: number, user: UpdateUserDto): Promise<User> {
    try {
      // Update user
      await this.userRepository.update(id, user);

      return this.findById(id);
    } catch (err) {
      console.log(err);
    }
  }

  // Create google user in db
  // Google user
  async createGoogleUser(
    createGoogleUserDto: CreateGoogleUserDto,
  ): Promise<User> {
    try {
      const {
        first_name,
        last_name,
        email,
        // image_url,
        google_access_token,
        isAgreeToTermsAndConditions,
      } = createGoogleUserDto;

      const role = await this.roleRepository.findOneBy({
        name: 'user',
      });

      const user = await this.userRepository.create({
        first_name,
        last_name,
        email,
        // image_url,
        google_access_token,
        isAgreeToTermsAndConditions,
        role,
        is_verified: true,
        status: Status.ACTIVE,
        register_type: RegisterType.GOOGLE,
      });

      const createdGoogleUser = await this.userRepository.save(user);
      return createdGoogleUser;
    } catch (err) {
      console.log(err);
    }
  }

  // Update the existing google user by user id
  async updateGoogleUserById(
    id: number,
    updateGoogleUserDto: UpdateGoogleUserDto,
  ): Promise<User> {
    try {
      // Update user
      await this.userRepository.update(id, updateGoogleUserDto);

      return await this.findById(id);
    } catch (err) {
      console.log(err);
    }
  }

  // Update user password by provided is
  async updatePasswordById(
    id: number,
    newDetails: { password: string; verification_code?: number },
  ): Promise<User> {
    try {
      // Update user
      await this.userRepository.update(id, newDetails);

      return await this.findById(id);
    } catch (err) {
      console.log(err);
    }
  }

  // Update user info by id

  async updateUserInfoById() { }

  // hashing the password
  async _hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  // Code generate ( 6 numbers length ) for verify the user
  _verificationCodeGenerate(length: number): number {
    var randomNum = (
      Math.pow(10, length)
        .toString()
        .slice(length - 1) +
      Math.floor(Math.random() * Math.pow(10, length) + 1).toString()
    ).slice(-length);
    return Number(randomNum);
  }

  // Get user id of user
  _getUserId(userId: number): UserId {
    return {
      id: userId,
    };
  }

  // Decode JWT token
  async _decodeJWT(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }

  // Check password match
  async _doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  // Get user details ( public details only )
  _getUserDetails(user: User): PublicUserDetails {
    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username,
      phone_number: user.phone_number,
      street: user.street,
      apartment: user.apartment,
      city: user.city,
      postal_code: user.postal_code,
      country: user.country,
      // image_url: user.image_url,
      is_subscribed_telegram: user.is_subscribed_telegram,
      register_type: user.register_type,
      status: user.status,
      role: user.role,
      membership: user.membership,
      is_verified: user.is_verified,
      user_coin_review_polls: user.user_coin_review_polls,
      user_video_polls: user.user_video_polls,
      payments: user.payments,
      vouchers: user.vouchers,
      gifts: user.gifts,
    };
  }

  async updateUserMembership(id: number, membership: Membership) {
    try {
      const queryBuilder = this.userRepository.createQueryBuilder();
      await queryBuilder
        .update(User)
        .set({
          membership,
        })
        .where('id = :id', { id })
        .setParameters({
          new: true,
          runValidators: true,
        })
        .execute();
      return this.userRepository.findOneBy({
        id: id,
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  async updateUserStripeCustomerId(customerId: string, user: User) {
    try {
      user.stripe_customer_id = customerId
      return this.userRepository.save(user)
    } catch (error) {
      throw new Error(`Method not implemented `)
    }
  }

  async updateUserStripeDefaultPaymentMethod(paymentMethodId: string, user: User) {
    try {
      user.stripe_default_payment_method = paymentMethodId
      console.log('user', user)
      return this.userRepository.save(user)
    } catch (error) {
      throw new Error(`Method not implemented `)
    }
  }
}
