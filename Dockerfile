FROM mhart/alpine-node:9

# Install dev dependencies
#RUN build_pkgs="gcc g++ python git openssh openssl ca-certificates" && \
#    run_pkgs="make bash" && \
#    apk --update add ${run_pkgs} ${build_pkgs}

# Set working directory
WORKDIR /home/apollo-server

# Move code to container
ADD . ./

# Install npm global dependencies
#RUN npm install -g gulp-cli

# Install npm local dependencies
RUN npm install

# The main entrypoint
#ENTRYPOINT ["npm run start"]

# The main command of this container (can be overrided by clients)
#CMD ["prod"]