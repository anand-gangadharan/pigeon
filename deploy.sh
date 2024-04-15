#!/bin/bash
STACK_NAME=pigeon
TEMPLATE=file:////Users/anandg/git/aws-cloudfront-exp/simple-lambda/deploy-cloudformation.yaml 
CAPS=CAPABILITY_NAMED_IAM

create() {
    aws cloudformation create-stack  --stack-name $STACK_NAME --template-body $TEMPLATE --capabilities $CAPS
}

update() {
    aws cloudformation update-stack --stack-name $STACK_NAME --template-body $TEMPLATE --capabilities $CAPS
}

case "$1" in 
    create)
       create
       ;;
    update)
       update
       ;;
    *)
       echo "Usage: $0 {create|update}"
esac

exit 0 
