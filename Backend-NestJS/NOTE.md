1. Class Validator
github: github.com/typestack/class-validator
npm: npmjs.com/package/class-validator
```bash
npm install class-validator
```
```typescript
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
```