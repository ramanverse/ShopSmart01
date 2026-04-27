resource "aws_ecs_cluster" "main" {
  name = "${var.project_name}-cluster"
}

# --- CloudWatch Logs ---
resource "aws_cloudwatch_log_group" "backend" {
  name              = "/ecs/${var.project_name}-backend"
  retention_in_days = 7
}

resource "aws_cloudwatch_log_group" "frontend" {
  name              = "/ecs/${var.project_name}-frontend"
  retention_in_days = 7
}

# --- ECS Services ---
resource "aws_ecs_service" "backend" {
  name            = "${var.project_name}-backend-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = "arn:aws:ecs:us-east-1:ACCOUNT_ID:task-definition/shopsmart-backend:1" # Initial placeholder
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = data.aws_subnets.default.ids
    assign_public_ip = true
  }

  lifecycle {
    ignore_changes = [task_definition] # Managed by CI/CD
  }
}

resource "aws_ecs_service" "frontend" {
  name            = "${var.project_name}-frontend-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = "arn:aws:ecs:us-east-1:ACCOUNT_ID:task-definition/shopsmart-frontend:1" # Initial placeholder
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = data.aws_subnets.default.ids
    assign_public_ip = true
  }

  lifecycle {
    ignore_changes = [task_definition] # Managed by CI/CD
  }
}
