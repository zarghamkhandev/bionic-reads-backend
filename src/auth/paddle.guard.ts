import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { serialize } from 'php-serialize';
import { createVerify } from 'crypto';
@Injectable()
export class PaddleGuard implements CanActivate {
  constructor(private configService: ConfigService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const key64 = this.configService.get('PADDLE_PUBLIC_KEY') as string;
    const key = Buffer.from(key64, 'base64').toString('ascii');
    return validateWebhook(req.body, key);
  }
}

function ksort(obj: any) {
  const keys = Object.keys(obj).sort();
  let sortedObj = {} as any;
  for (let i in keys) {
    sortedObj[keys[i]] = obj[keys[i]];
  }
  return sortedObj;
}

function validateWebhook(jsonObj: any, pubKey: string) {
  if (!jsonObj.p_signature) return false;

  // Grab p_signature
  const mySig = Buffer.from(jsonObj.p_signature, 'base64');
  // Remove p_signature from object - not included in array of fields used in verification.
  delete jsonObj.p_signature;
  // Need to sort array by key in ascending order
  jsonObj = ksort(jsonObj);
  for (let property in jsonObj) {
    if (
      jsonObj.hasOwnProperty(property) &&
      typeof jsonObj[property] !== 'string'
    ) {
      if (Array.isArray(jsonObj[property])) {
        // is it an array
        jsonObj[property] = jsonObj[property].toString();
      } else {
        //if its not an array and not a string, then it is a JSON obj
        jsonObj[property] = JSON.stringify(jsonObj[property]);
      }
    }
  }
  // Serialise remaining fields of jsonObj
  const serialized = serialize(jsonObj);
  // verify the serialized array against the signature using SHA1 with your public key.
  const verifier = createVerify('sha1');
  verifier.update(serialized);
  verifier.end();

  const verification = verifier.verify(pubKey, mySig);
  // Used in response if statement
  return verification;
}
