import { IsString, IsOptional, IsBoolean, IsDefined } from "class-validator";
import { Todo } from "../common/types";

export class TodoDTO {
  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed!: boolean;

  constructor(props: Todo) {
    Object.assign(this, props);
  }
}
