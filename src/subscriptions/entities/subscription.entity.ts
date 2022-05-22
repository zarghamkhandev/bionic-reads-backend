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

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @Column()
  email: string;

  @Column()
  alert_id: string;

  @Column()
  checkout_id: string;

  @Column({ type: 'timestamptz' })
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
