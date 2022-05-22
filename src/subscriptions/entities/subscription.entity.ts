import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  email: string;

  @Column()
  alert_id: string;

  @Column()
  checkout_id: string;

  @Column()
  event_time: Date;

  @Column()
  licence: string;

  @Column()
  marketing_consent: number;

  @Column()
  order_id: string;

  @Column()
  product_id: string;
}
