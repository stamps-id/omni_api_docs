FROM shesse/redoc-cli:1.0.1

RUN npm install -g redoc-cli

COPY LICENSE README.md /

COPY generate-docs.sh /generate-docs.sh

ENTRYPOINT ["/generate-docs.sh"]