import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "HangarStack",
    description: "Aircraft database with real-time event streaming using Apache Kafka and Confluent Cloud",
    tech: ["Python", "Flask", "Apache Kafka", "Confluent Cloud", "Docker", "JavaScript"],
    github: "#",
    live: "#"
  },
  {
    title: "Serverless Data Pipeline",
    description: "Event-driven data processing pipeline with AWS Lambda and DynamoDB",
    tech: ["Python", "AWS Lambda", "DynamoDB", "S3", "SNS", "SQS"],
    github: "#",
    live: "#"
  },
  {
    title: "Flask Microservices API",
    description: "Containerized microservices architecture with MySQL and Docker deployment",
    tech: ["Python", "Flask", "MySQL", "Docker", "GitLab CI/CD", "EC2"],
    github: "#",
    live: "#"
  }
];
