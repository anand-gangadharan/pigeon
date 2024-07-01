#!/bin/bash
STACK_NAME=pigeon
TEMPLATE=file:///Users/anandgangadharan/git/pigeon/deploy-cloudformation.yaml 
CAPS=CAPABILITY_NAMED_IAM

create() {
    aws cloudformation create-stack  --stack-name $STACK_NAME --template-body $TEMPLATE --capabilities $CAPS
}

update() {
    aws cloudformation update-stack --stack-name $STACK_NAME - $TEMPLATE --capabilities $CAPS
}
validate() {
    aws cloudformation validate-template  --template-body $TEMPLATE  
}
delete() {
    aws cloudformation delete-stack --stack-name $STACK_NAME
}

case "$1" in 
    create)
       create
       ;;
    validate)
       validate
       ;;
    delete)
       delete
       ;;
    update)
       update
       ;;
    *)
       echo "Usage: $0 {create|update|validate|delete}"
esac
