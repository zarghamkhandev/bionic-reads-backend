import { Type } from 'class-transformer';

export class PaymentSuccessDto {
  alert_name: string;
  alert_id: string;
  balance_currency: string;
  @Type(() => Number)
  balance_earnings: number;
  @Type(() => Number)
  balance_fee: number;
  @Type(() => Number)
  balance_gross: number;
  @Type(() => Number)
  balance_tax: number;
  checkout_id: string;
  country: string;
  coupon: string;
  currency: string;
  customer_name: string;
  @Type(() => Number)
  earnings: number;
  email: string;
  event_time: string;
  @Type(() => Number)
  fee: number;
  ip: string;
  marketing_consent: string;
  order_id: string;
  p_signature: string;
  passthrough: string;
  payment_method: string;
  @Type(() => Number)
  payment_tax: number;
  product_id: string;
  product_name: string;
  @Type(() => Number)
  quantity: number;
  receipt_url: string;
  @Type(() => Number)
  sale_gross: number;
  used_price_override: string;
  //   @Transform((x) => new Date(x.value + ' UTC'))
  //   event_time: string;
  //   @Transform((x) => new Date(x.value + ' UTC'))
  //   next_retry_date: string;
  //   @Transform((x) => (x?.value ? JSON.parse(x.value) : null))
  //   passthrough: string;
  //   @Type(() => Number)
  //   attempt_number: string;
}
