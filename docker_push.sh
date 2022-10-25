#!/usr/bin/env bash

set -e

CONTAINER_IMAGE="pharma-geolocation-example"
CONTAINER_REGISTRY="registry.digitalocean.com/pharma-geolocation-example"

if [ -z "$REACT_APP_GOOGLE_PLACES_API_KEY" ]; then
   echo "Google API key not set. Run 'export REACT_APP_GOOGLE_PLACES_API_KEY=\<your-key\>' to  have your containerized application properly work."
      exit 0
fi

yarn install && yarn build
docker buildx build --platform linux/amd64 -t $CONTAINER_IMAGE .
docker tag ${CONTAINER_NAME} "${CONTAINER_REGISTRY}/${CONTAINER_IMAGE}"
docker push "${CONTAINER_REGISTRY}/${CONTAINER_NAME}"


