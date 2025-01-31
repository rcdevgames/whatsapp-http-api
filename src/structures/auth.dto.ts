import { ApiProperty } from '@nestjs/swagger';

export class RequestCodeRequest {
  @ApiProperty({
    description: 'Mobile phone number in international format',
    example: '12132132130',
  })
  phoneNumber: string;

  @ApiProperty({
    description:
      'How would you like to receive the one time code for registration? |sms|voice. Leave empty for Web pairing.',
    example: null,
    required: false,
  })
  method: string;
}

export class OTPRequest {
  code: string;
}

export class PairingCodeResponse {
  code: string;
}
