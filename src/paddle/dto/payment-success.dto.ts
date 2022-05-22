import { Transform, Type } from 'class-transformer';

export class PaymentSuccessDto {
  alert_id: string;
  alert_name: string;
  checkout_id: string;
  checkout_recovery: string;
  coupon: string;
  download: string;
  email: string;
  @Transform((x) => new Date(x.value + ' UTC'))
  event_time: Date;
  instructions: string;
  licence: string;
  @Type(() => Number)
  marketing_consent: number;
  order_id: string;
  p_signature: string;
  product_id: string;
  @Type(() => Number)
  quantity: string;
  source: string;
}
