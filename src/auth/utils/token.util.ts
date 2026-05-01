import { JwtService } from '@nestjs/jwt';

export class TokenUtil {
  static generateAccessToken(jwt: JwtService, user: any) {
    return jwt.sign(
      { sub: user.id, email: user.email, role: user.role },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      },
    );
  }

  static generateRefreshToken(jwt: JwtService, user: any) {
    return jwt.sign(
      { sub: user.id },
      {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      },
    );
  }
}
