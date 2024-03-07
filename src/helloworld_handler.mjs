
export const handler  = function (event, context) {
    console.log('Hello World')
    context.succeed('hello world');
};