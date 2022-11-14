import { get } from 'env-var';

export class DbConfig {
  public static readonly DB: string = get('DB').required().asString();

  public static readonly PORT: number = get('DB_PORT')
    .required()
    .asPortNumber();

  public static readonly USER: string = get('DB_USER').required().asString();

  public static readonly PASSWORD: string = get('DB_PASSWORD')
    .required()
    .asString();

  public static readonly HOST: string = get('DB_HOST').required().asString();
}
