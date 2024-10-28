import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext) => { //ExecutionContext: Websocket, GRPC Request in the future
        const request = context.switchToHttp().getRequest();
        // console.log(request.session.userId);
        // return 'hi there!'
        return request.currentUser;
    }
)