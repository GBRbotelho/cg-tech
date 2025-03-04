type Title = {
  title: {
    text: {
      content: string;
    };
  }[];
};

type Select = {
  select: {
    name: string;
  };
};

type Relation = {
  relation: {
    id: string;
  }[];
};

type Date = {
  date: { start: string };
};

type Number = {
  number: number;
};

type Status = {
  status: {
    name: string;
  };
};

type RichText = {
  rich_text: {
    text: {
      content: string;
    };
  }[];
};

type File = {
  files: {
    file: {
      url: string;
    };
  }[];
};

type uniqueID = {
  unique_id: {
    number: number;
  };
};

type Url = {
  url: string;
};

export class NotionAdapter {
  static title(value: Title) {
    return value?.title?.[0]?.text?.content || "";
  }
  static status(value: Status) {
    return value?.status?.name || "";
  }

  static select(value: Select) {
    return value?.select?.name || "";
  }

  static relation(value: Relation) {
    return value?.relation[0]?.id || "";
  }

  static uniqueID(value: uniqueID) {
    return String(value?.unique_id.number) || "";
  }

  static date(value: Date) {
    if (!value?.date?.start) return "";

    const date = new Date(value.date.start);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  static richText(value: RichText) {
    return value?.rich_text?.[0]?.text?.content || "";
  }

  static number(value: Number) {
    return value?.number || 0;
  }

  static file(value: File) {
    return value?.files?.map((file) => file?.file?.url);
  }

  static url(value: Url) {
    return value.url;
  }

  //Conversão para envio

  static sendTitle(value: string) {
    return {
      type: "title",
      title: [
        {
          type: "text",
          text: {
            content: value,
          },
        },
      ],
    };
  }

  static sendRichText(value: string) {
    return {
      rich_text: [
        {
          type: "text",
          text: {
            content: value,
          },
        },
      ],
    };
  }

  static sendEmail(value: string) {
    return {
      type: "email",
      email: value,
    };
  }

  static sendRelation(value: string) {
    return {
      type: "relation",
      relation: [
        {
          id: value,
        },
      ],
    };
  }
}
