import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToInstance  } from "class-transformer";

interface ClassConstructor {
    new (...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializerInterceptor(dto))
}

export class SerializerInterceptor implements NestInterceptor {
    constructor(private dto: any) {}

    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // Run something before a request is handled
        // by the request handler


        return handler.handle().pipe(
            map((data: any) => {
                // Run something before the response is sent out
                return plainToInstance(this.dto, data, {
                    excludeExtraneousValues: true,
                });
            })
        )
    }
}