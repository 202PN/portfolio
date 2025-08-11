import { Experience } from '../types';

export const experience: Experience[] = [
  {
    title: "Associate Software Engineer",
    company: "Southwest Airlines",
    period: "2022 - 2025",
    description: "Designed and implement serverless architectures using AWS Lambda and DynamoDB",
    tech: ["Python", "AWS Lambda", "DynamoDB", "S3", "CloudFormation", "Docker"]
  },
  {
    title: "Backend Developer",
    company: "Data Systems Corp",
    period: "2020 - 2022", 
    description: "Built Flask APIs and managed MySQL databases with Docker deployment",
    tech: ["Python", "Flask", "MySQL", "Docker", "GitLab", "EC2"]
  },
  {
    title: "Software Developer",
    company: "CloudTech Solutions",
    period: "2019 - 2020",
    description: "Developed event-driven systems using Kafka and AWS messaging services",
    tech: ["Python", "Apache Kafka", "SQS", "SNS", "CloudWatch", "IAM"]
  }
];
