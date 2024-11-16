import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsDatabase: any[] = [
    {
      name: "Abraracourcix",
      description: "Le chef du village des irréductibles gaulois",
      imgSrc: "/assets/images/products/abraracourcix/abraracourcix.webp",
      imgAlt: "Figurine d'Abraracourcix avec les bras grands ouverts.",
      price: 12,
      link: "/produits/abraracourcix"
    },
    {
      name: "Agecanonix",
      description: "Le doyen du village d'Astérix et Obélix",
      imgSrc: "/assets/images/products/agecanonix/agecanonix.webp",
      imgAlt: "Figurine d'Agecanonix les deux bras tendus posés sur sa canne.",
      price: 13,
      link: "/products/agecanonix"
    },
    {
      name: "Assurancetourix",
      description: "Le barde du village ayant une voix aussi redoutable que les pouvoirs de la potion magique",
      imgSrc: "/assets/images/products/assurancetourix/assurancetourix.webp",
      imgAlt: "Figurine d'Assurancetourix avec sa lyre dans les mains.",
      price: 10,
      link: "/products/asterix"
    },
    {
      name: "Astérix",
      description: "L'irréductible gaulois le plus malicieux",
      imgSrc: "/assets/images/products/asterix/asterix.webp",
      imgAlt: "Figurine d'Astérix débout avec un bras en l'air.",
      price: 15,
      link: "/produits/asterix"
    },
    {
      name: "Centurion",
      description: "Un des nombreux chefs des groupes armés sous les ordres de César",
      imgSrc: "/assets/images/products/centurion/centurion.webp",
      imgAlt: "Figurine d'un centurion avec le bras droit en l'air portant un glaive et la main gauche sur le fourreau du glaive.",
      price: 10,
      link: "/produits/centurion"
    },
    {
      name: "César",
      description: "L'empereur romain qui tente d'envahir la totalité de la Gaule",
      imgSrc: "/assets/images/products/cesar/cesar.webp",
      imgAlt: "César avec son armure et sa couronne de laurier, debout avec le bras droit sur la hanche et le bras gauche tendu pour un baise main.",
      price: 14,
      link: "/produits/cesar"
    },
    {
      name: "Cléopâtre",
      description: "La reine d'Egypte qui a chargé Numérobis de construire un palais en 3 mois",
      imgSrc: "/assets/images/products/cleopatre/cleopatre.webp",
      imgAlt: "Figurine de Cléopâtre debout bras droit tendu avec l'index vers le bas, sa main gauche est sur sa hanche. Son tigre est couché à ses pieds sur sa droite.",
      price: 13,
      link: "/produits/cleopatre"
    },
    {
      name: "Falbala",
      description: "Jeune femme du village gaulois, nièce du chef du village et épouse de Tragicomix",
      imgSrc: "/assets/images/products/falbala/falbala.webp",
      imgAlt: "Figurine de Falbala en train de marcher et de porter un panier en oisier sur son avant bras droit.",
      price: 14,
      link: "/produits/falbala"
    },
    {
      name: "Idéfix",
      description: "Le fidèle compagnon de nos deux aventuriers",
      imgSrc: "/assets/images/products/idefix/idefix.webp",
      imgAlt: "Figurine du chien Idéfix en position assise.",
      price: 15,
      link: "/produits/idefix"
    },
    {
      name: "Numérobis",
      description: "Le meilleur architecte d'Alexandrie qui a construit un palais pour Cléopâtre en 3 mois",
      imgSrc: "/assets/images/products/numerobis/numerobis.webp",
      imgAlt: "Figurine de Numérobis croisant les mains dans le dos.",
      price: 10,
      link: "/produits/numerobis"
    },
    {
      name: "Obélix",
      description: "Le gaulois tombé dans la potion magique lorsqu'il était petit",
      imgSrc: "/assets/images/products/obelix/obelix.webp",
      imgAlt: "Figurine d'Obélix portant un menhir dans son dos.",
      price: 15,
      link: "/produits/obelix"
    },
    {
      name: "Panoramix",
      description: "Le druide du village, seul détenteur de la formule de la potion magique",
      imgSrc: "/assets/images/products/panoramix/panoramix.webp",
      imgAlt: "Figurine de Panoramix en train de marcher avec une louche dans sa main droite.",
      price: 14,
      link: "/produits/panoramix"
    },
    {
      name: "Soldat romain",
      description: "Fantassin de l'armée romaine sous les ordres de César",
      imgSrc: "/assets/images/products/soldat_romain/soldat-romain.webp",
      imgAlt: "Figurine d'un soldat romain portant son armure, une lance dans la main droite et un bouclier rectangulaire dans la main gauche.",
      price: 8,
      link: "/produits/soldat-romain"
    },
    {
      name: "Tragicomix",
      description: "Fiancé de Falbala et fils du chef d'un autre village gaulois",
      imgSrc: "/assets/images/products/tragicomix/tragicomix.webp",
      imgAlt: "Figurine de Tragicomix bombant le torse avec les mains sur les hanches.",
      price: 11,
      link: "/produits/tragicomix"
    }
  ];

  constructor() { }
}
