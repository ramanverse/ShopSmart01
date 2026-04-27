variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "shopsmart"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "vpc_id" {
  description = "VPC ID for deployment (use default or existing)"
  type        = string
  default     = "" # To be filled or fetched automatically
}
