import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsDatabase: any[] = [
    {
      id : "abraracourcix",
      name: "Abraracourcix",
      shortDescription: "Le chef du village des irréductibles gaulois",
      longDescription: "Le chef du village des irréductibles gaulois. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lectus at elit efficitur vehicula eget id sapien. Cras quis suscipit mi. Quisque sit amet.",
      imgSrc: "/assets/images/products/abraracourcix/abraracourcix.webp",
      imgAlt: "Figurine d'Abraracourcix avec les bras grands ouverts.",
      price: 12
    },
    {
      id : "agecanonix",
      name: "Agecanonix",
      shortDescription: "Le doyen du village d'Astérix et Obélix",
      longDescription: "Le doyen du village d'Astérix et Obélix. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl ut risus varius vestibulum nec vitae mi. Maecenas consectetur cursus porta. Donec ornare dolor.",
      imgSrc: "/assets/images/products/agecanonix/agecanonix.webp",
      imgAlt: "Figurine d'Agecanonix les deux bras tendus posés sur sa canne.",
      price: 13
    },
    {
      id : "assurancetourix",
      name: "Assurancetourix",
      shortDescription: "Le barde du village ayant une voix aussi redoutable que les pouvoirs de la potion magique",
      longDescription: "Le barde du village ayant une voix aussi redoutable que les pouvoirs de la potion magique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a justo vitae eros lacinia aliquet. Nunc ac justo ac diam lacinia mollis sit amet vitae.",
      imgSrc: "/assets/images/products/assurancetourix/assurancetourix.webp",
      imgAlt: "Figurine d'Assurancetourix avec sa lyre dans les mains.",
      price: 10
    },
    {
      id : "asterix",
      name: "Astérix",
      shortDescription: "L'irréductible gaulois le plus malicieux",
      longDescription: "L'irréductible gaulois le plus malicieux. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula volutpat nisi id imperdiet. Mauris ullamcorper turpis non ante dictum, molestie pulvinar magna ullamcorper. Aliquam.",
      imgSrc: "/assets/images/products/asterix/asterix.webp",
      imgAlt: "Figurine d'Astérix débout avec un bras en l'air.",
      price: 15
    },
    {
      id : "centurion",
      name: "Centurion",
      shortDescription: "Un des nombreux chefs des groupes armés sous les ordres de César",
      longDescription: "Un des nombreux chefs des groupes armés sous les ordres de César. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ipsum mauris, facilisis vitae placerat eget, mollis eget libero. Donec non.",
      imgSrc: "/assets/images/products/centurion/centurion.webp",
      imgAlt: "Figurine d'un centurion avec le bras droit en l'air portant un glaive et la main gauche sur le fourreau du glaive.",
      price: 10
    },
    {
      id : "cesar",
      name: "César",
      shortDescription: "L'empereur romain qui tente d'envahir la totalité de la Gaule",
      longDescription: "L'empereur romain qui tente d'envahir la totalité de la Gaule. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum, lectus eu finibus interdum, mi augue rhoncus sapien, in interdum ipsum nisl id tellus. Nullam.",
      imgSrc: "/assets/images/products/cesar/cesar.webp",
      imgAlt: "César avec son armure et sa couronne de laurier, debout avec le bras droit sur la hanche et le bras gauche tendu pour un baise main.",
      price: 14
    },
    {
      id : "cleopatre",
      name: "Cléopâtre",
      shortDescription: "La reine d'Egypte qui a chargé Numérobis de construire un palais en 3 mois",
      longDescription: "La reine d'Egypte qui a chargé Numérobis de construire un palais en 3 mois. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque finibus ligula, quis tempor massa porttitor scelerisque. Class aptent taciti sociosqu ad litora torquent per.",
      imgSrc: "/assets/images/products/cleopatre/cleopatre.webp",
      imgAlt: "Figurine de Cléopâtre debout bras droit tendu avec l'index vers le bas, sa main gauche est sur sa hanche. Son tigre est couché à ses pieds sur sa droite.",
      price: 13
    },
    {
      id: "falbala",
      name: "Falbala",
      shortDescription: "Jeune femme du village gaulois, nièce du chef du village et épouse de Tragicomix",
      longDescription: "Jeune femme du village gaulois, nièce du chef du village et épouse de Tragicomix. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et pretium lectus, sit amet tempor est. Aenean luctus orci ut.",
      imgSrc: "/assets/images/products/falbala/falbala.webp",
      imgAlt: "Figurine de Falbala en train de marcher et de porter un panier en oisier sur son avant bras droit.",
      price: 14
    },
    {
      id: "idefix",
      name: "Idéfix",
      shortDescription: "Le fidèle compagnon de nos deux aventuriers",
      longDescription: "Le fidèle compagnon de nos deux aventuriers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies consequat sem, ut aliquam enim congue nec. In commodo malesuada.",
      imgSrc: "/assets/images/products/idefix/idefix.webp",
      imgAlt: "Figurine du chien Idéfix en position assise.",
      price: 15
    },
    {
      id: "numerobis",
      name: "Numérobis",
      shortDescription: "Le meilleur architecte d'Alexandrie qui a construit un palais pour Cléopâtre en 3 mois",
      longDescription: "Le meilleur architecte d'Alexandrie qui a construit un palais pour Cléopâtre en 3 mois. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin ultrices tempor. Suspendisse vel eros vestibulum magna auctor ultricies. Cras eget arcu metus. Proin sapien.",
      imgSrc: "/assets/images/products/numerobis/numerobis.webp",
      imgAlt: "Figurine de Numérobis croisant les mains dans le dos.",
      price: 10
    },
    {
      id: "obelix",
      name: "Obélix",
      shortDescription: "Le gaulois tombé dans la potion magique lorsqu'il était petit",
      longDescription: "Le gaulois tombé dans la potion magique lorsqu'il était petit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at imperdiet elit, ac auctor nisi. Aenean efficitur erat sit amet lacus interdum suscipit. Ut ut.",
      imgSrc: "/assets/images/products/obelix/obelix.webp",
      imgAlt: "Figurine d'Obélix portant un menhir dans son dos.",
      price: 15
    },
    {
      id: "panoramix",
      name: "Panoramix",
      shortDescription: "Le druide du village, seul détenteur de la formule de la potion magique",
      longDescription: "Le druide du village, seul détenteur de la formule de la potion magique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in placerat urna, vitae posuere nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet.",
      imgSrc: "/assets/images/products/panoramix/panoramix.webp",
      imgAlt: "Figurine de Panoramix en train de marcher avec une louche dans sa main droite.",
      price: 14
    },
    {
      id: "soldat_romain",
      name: "Soldat romain",
      shortDescription: "Fantassin de l'armée romaine sous les ordres de César",
      longDescription: "Fantassin de l'armée romaine sous les ordres de César. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie, justo vel elementum sollicitudin, mi eros mollis nulla, quis ullamcorper.",
      imgSrc: "/assets/images/products/soldat_romain/soldat-romain.webp",
      imgAlt: "Figurine d'un soldat romain portant son armure, une lance dans la main droite et un bouclier rectangulaire dans la main gauche.",
      price: 8
    },
    {
      id: "tragicomix",
      name: "Tragicomix",
      shortDescription: "Fiancé de Falbala et fils du chef d'un autre village gaulois",
      longDescription: "Fiancé de Falbala et fils du chef d'un autre village gaulois. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat, nisl in lacinia maximus, ligula felis eleifend nulla, sed blandit.",
      imgSrc: "/assets/images/products/tragicomix/tragicomix.webp",
      imgAlt: "Figurine de Tragicomix bombant le torse avec les mains sur les hanches.",
      price: 11
    }
  ];

  constructor() { }
}
