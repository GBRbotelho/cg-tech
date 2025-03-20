import { Course } from "@/core/domain/entities/course";
import { NotionAdapter } from "@/core/application/adapters/NotionAdapter";
import { NotionService } from "../services/NotionService";
import { Lesson } from "@/core/domain/entities/lesson";
export interface PageAttributes {
  banner: string;
  tag: string;
  phase: string;
  slug: string;
}

export interface Informations {
  title: string;
  value: string | undefined;
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class NotionController {
  static async getCourses(): Promise<Course[]> {
    const results = await NotionService.request(
      "1ac3c610a4648098bd18ff650521b7eb"
    );

    return results.map((result: any) => ({
      thumbnail: NotionAdapter.file(result.properties.Thumbnail)[0],
      title: NotionAdapter.title(result.properties.Titulo),
      id: result.id,
      description: NotionAdapter.richText(result.properties.Descricao),
      category: NotionAdapter.select(result.properties.Categoria),
    }));
  }

  static async getCourseId(params: any): Promise<Course | undefined> {
    const result = await NotionService.requestId(params.id);
    if (result) {
      return {
        thumbnail: NotionAdapter.file(result.properties.Thumbnail)[0],
        title: NotionAdapter.title(result.properties.Titulo),
        description: NotionAdapter.richText(result.properties.Descricao),
        id: result.id,
        category: NotionAdapter.select(result.properties.Categoria),
      };
    }
  }

  static async getLessonsByCourse(params: any): Promise<Lesson[]> {
    const results = await NotionService.request(
      "1bc3c610a46480e9b1abd3c9653524ba"
    );

    return results
      .map((result: any) => ({
        title: NotionAdapter.title(result.properties.Titulo),
        id: result.id,
        description: NotionAdapter.richText(result.properties.Descricao),
        url: NotionAdapter.url(result.properties.Video),
        text: NotionAdapter.richText(result.properties.Texto),
        course: NotionAdapter.relation(result.properties.Curso),
      }))
      .filter((lesson: Lesson) => lesson.course === params.id);
  }

  //   static async getHosts(): Promise<Host.Props[]> {
  //     const results = await NotionService.request(
  //       "70c82e25cd954cac9a1b8d1d4a7d91fa",
  //     );

  //     return results.map((result: any) => ({
  //       idPage: result.id,
  //       name: NotionAdapter.title(result.properties.Nome),
  //       description: NotionAdapter.richText(result.properties["Descrição"]),
  //       thumbnail: NotionAdapter.file(result.properties.Thumbnail)[0] || "",
  //     }));
  //   }

  //   static async getTrips(): Promise<Trip.Props[]> {
  //     const results = await NotionService.request(
  //       "0251a3d947c54276af4c4c5f1bf00423",
  //     );

  //     return results.map((result: any) => ({
  //       idPage: result.id,
  //       id: NotionAdapter.uniqueID(result.properties.ID),
  //       type: NotionAdapter.select(result.properties["Tipos de viagem"]),
  //       destination: NotionAdapter.relation(result.properties.Destino),
  //       startsIn: NotionAdapter.date(result.properties["Inicia em"]),
  //       endsIn: NotionAdapter.date(result.properties["Finaliza em"]),
  //       vacancies: NotionAdapter.number(result.properties["Vagas disponíveis"]),
  //       maxGroup: NotionAdapter.richText(result.properties["Grupo maximo"]),
  //       host: NotionAdapter.relation(result.properties.Hosts),
  //       status: NotionAdapter.select(result.properties.Status),
  //       information: NotionAdapter.relation(
  //         result.properties["Informações gerais"],
  //       ),
  //       cover: NotionAdapter.file(result.properties.Capa)[0] || "",
  //     }));
  //   }

  //   static async getDestinations(): Promise<Destination.Props[]> {
  //     const results = await NotionService.request(
  //       "365c2d3777ba4abcaa150a934ef994b7",
  //     );

  //     return results.map((result: any) => ({
  //       idPage: result.id,
  //       name: NotionAdapter.title(result.properties.Nome) || "",
  //       subtitle: NotionAdapter.richText(result.properties.SubTitulo) || "",
  //       description: NotionAdapter.richText(result.properties.Descricao) || "",
  //       species: NotionAdapter.richText(result.properties.Especies) || "",
  //       country: NotionAdapter.richText(result.properties.Pais) || "",
  //       city: NotionAdapter.richText(result.properties.Cidade) || "",
  //       flag: [
  //         NotionAdapter.richText(result.properties.Flag).split(",")[0] || "",
  //         NotionAdapter.richText(result.properties.Flag).split(",")[1] || "",
  //         NotionAdapter.richText(result.properties.Flag).split(",")[2] || "",
  //       ] || ["", "", ""],
  //       internet: NotionAdapter.richText(result.properties.Internet) || "",
  //       maxGroup: NotionAdapter.richText(result.properties.Maximo) || "",
  //       idealFor: NotionAdapter.richText(result.properties.Ideal) || "",
  //       type: NotionAdapter.richText(result.properties.Tipo) || "",
  //       banner: NotionAdapter.file(result.properties.Banner) || [],
  //       guesthouse: NotionAdapter.file(result.properties.Pousada)[0] || "",
  //       photos: NotionAdapter.file(result.properties.Fotos) || [],
  //       thumbnail: NotionAdapter.file(result.properties["Thumbnail Video"]) || [],
  //       video: NotionAdapter.url(result.properties.Video) || "",
  //       information:
  //         NotionAdapter.relation(
  //           result.properties[
  //             "Related to Zyba - Informações gerais (Related to Zyba - Destination (Informações gerais))"
  //           ],
  //         ) || "",
  //     }));
  //   }

  //   static async getHostId(id: string): Promise<Host.Props | undefined> {
  //     const request = await NotionService.requestId(id);

  //     if (request) {
  //       return {
  //         idPage: request.id,
  //         name: NotionAdapter.title(request.properties.Nome),
  //         description: NotionAdapter.richText(request.properties["Descrição"]),
  //         thumbnail: NotionAdapter.file(request.properties.Thumbnail)[0],
  //       };
  //     }
  //   }

  //   static async getDestinationsInformation(
  //     destination: Destination,
  //   ): Promise<Informations[] | null> {
  //     if (destination.information) {
  //       const request = await NotionService.requestId(destination.information);
  //       const information = Object.entries(request.properties)
  //         .filter(
  //           ([key]) =>
  //             key !== "Related to Zyba - Destination (Informações gerais)" &&
  //             key !== "A Éspecie",
  //         )
  //         .map(([key, value]) => ({
  //           title: key,
  //           value: (value as any)?.rich_text?.[0]?.plain_text || "",
  //         }));

  //       return information;
  //     } else {
  //       return null;
  //     }
  //   }

  //   static async getTripsInformation(trip: Trip): Promise<Informations[] | null> {
  //     if (trip.information) {
  //       const request = await NotionService.requestId(trip.information);

  //       const information = Object.entries(request.properties)
  //         .filter(([key]) => key !== "Nome" && key !== "Zyba - Viagens")
  //         .map(([key, value]) => ({
  //           title: key,
  //           value: (value as any)?.rich_text[0]?.plain_text || "",
  //         }));

  //       return information;
  //     } else {
  //       return null;
  //     }
  //   }

  //   static async getAttributeBySlug(
  //     slug: string,
  //   ): Promise<PageAttributes | null> {
  //     const results = await NotionService.request(
  //       "27cd81c41c804d7aab4f73a5465cb4df",
  //     );

  //     const infos: PageAttributes[] = results.map((result: any) => ({
  //       banner: randomArray(NotionAdapter.file(result.properties.Banner)) || "",
  //       tag: NotionAdapter.richText(result.properties.Tag),
  //       phase: NotionAdapter.richText(result.properties.Frase),
  //       slug: NotionAdapter.title(result.properties.Page),
  //     }));

  //     return infos.find((info) => info.slug === slug) || null;
  //   }

  //   static async postTripRequest(tripRequest: TripRequest.Props) {
  //     const databaseId = "f6a4a7c4aa204bb5b75fae16c693b62f";
  //     if (tripRequest) {
  //       const data = {
  //         "Primeiro Nome": NotionAdapter.sendTitle(tripRequest.firstName),
  //         Sobrenome: NotionAdapter.sendRichText(tripRequest.lastName),
  //         Email: NotionAdapter.sendEmail(tripRequest.email),
  //         Telefone: NotionAdapter.sendRichText(tripRequest.phone),
  //         "ID - Viagem": NotionAdapter.sendRelation(tripRequest.tripId),
  //       };

  //       const request = await NotionService.insertData(databaseId, data);

  //       return request;
  //     }
  //   }

  //   static async postCustomizedTrip(tripRequest: CustomizedTrip.Props) {
  //     const databaseId = "5c9609e9e24f40c8af31d1d500721bcc";
  //     if (tripRequest) {
  //       if (tripRequest.destination) {
  //         const data = {
  //           Destino: NotionAdapter.sendRelation(tripRequest.destination),
  //           "Primeiro Nome": NotionAdapter.sendTitle(tripRequest.firstName),
  //           Sobrenome: NotionAdapter.sendRichText(tripRequest.lastName),
  //           Email: NotionAdapter.sendEmail(tripRequest.email),
  //           Telefone: NotionAdapter.sendRichText(tripRequest.phone),
  //           Localização: NotionAdapter.sendRichText(tripRequest.location),
  //           Tipo: NotionAdapter.sendRichText(tripRequest.type),
  //         };

  //         const request = await NotionService.insertData(databaseId, data);

  //         return request;
  //       }
  //       const data = {
  //         "Primeiro Nome": NotionAdapter.sendTitle(tripRequest.firstName),
  //         Sobrenome: NotionAdapter.sendRichText(tripRequest.lastName),
  //         Email: NotionAdapter.sendEmail(tripRequest.email),
  //         Telefone: NotionAdapter.sendRichText(tripRequest.phone),
  //         Localização: NotionAdapter.sendRichText(tripRequest.location),
  //         Tipo: NotionAdapter.sendRichText(tripRequest.type),
  //       };

  //       const request = await NotionService.insertData(databaseId, data);

  //       return request;
  //     }
  //   }

  //   static async postNewsletter(newsletter: { email: string }) {
  //     const databaseId = "c1af976af60b404583f3af81daf7ca95";
  //     if (newsletter) {
  //       const data = {
  //         Email: NotionAdapter.sendEmail(newsletter.email),
  //       };

  //       const request = await NotionService.insertData(databaseId, data);

  //       return request;
  //     }
  //   }
}
