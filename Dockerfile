FROM node:lts

LABEL authors="Adrián Cejudo García"

RUN npm install -g npm

RUN echo "Node version" && node -v \
    && echo "NPM version" && npm -v \
    && npm install -g @angular/cli \
	&& npm cache clear --force

WORKDIR /usr/src/frontend

ADD ng_init.sh .

RUN ["chmod", "+x", "/usr/src/frontend/ng_init.sh"]

RUN groupmod --non-unique -g 1000 node && \
    usermod --non-unique -u 1000 node

RUN chown node:node /usr/src/ -R

ENTRYPOINT ["sh", "/usr/src/frontend/ng_init.sh"]
