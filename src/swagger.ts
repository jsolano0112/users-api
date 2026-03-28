import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'USERS API',
      version: '1.0.0',
      description:
        'API to handle users for DevMart API',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Application) {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
