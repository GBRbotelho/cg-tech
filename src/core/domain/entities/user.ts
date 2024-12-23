export class User {
  public _id: string;
  public name: string;
  public email: string;
  public createdAt: Date = new Date();
  public nivel: number = 0;
  public password: string;

  constructor(props?: User.Props) {
    this._id = props?._id || "";
    this.name = props?.name || "";
    this.email = props?.email || "";
    this.createdAt = props?.createdAt ? new Date(props?.createdAt) : new Date();
    this.password = props?.password || "";
  }

  setEmail(email: string) {
    this.email = email;
  }

  setName(name: string) {
    this.name = name;
  }

  values() {
    return {
      id: this._id || "",
      name: this.name || "",
      email: this.email || "",
      createdAt: this.createdAt,
      password: this.password || "",
      nivel: this.nivel || 1,
    };
  }
}

export namespace User {
  export interface Props {
    _id?: string;
    name?: string;
    email: string;
    createdAt?: Date;
    password: string;
    nivel: number;
  }
}
