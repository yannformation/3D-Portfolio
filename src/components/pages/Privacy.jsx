import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { logo } from "../../assets";

function Privacy() {
  return (
    <div>
      <h1
        className={`${styles.sectionHeadText} text-white flex justify-center py-20 mb-10`}
      >
        Politique de Confidentialité et Cookies.
      </h1>
    
      <Link to="/">
        <div className="flex items-center gap-2 mb-20">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain ml-16" />
          <p className="text-white/[0.6] text-[20px] font-bold cursor-pointer flex">
            Retour au site.
          </p>
        </div>
      </Link>
      <p
        className={`-mt-70 pb-14 ${styles.paddingX} flex flex-wrap justify-center text-[18px] leading-8`}
      >
        POLITIQUE DE CONFIDENTIALITE DE : www.yanndev-art.fr/<br />
Cette Application collecte certaines Données personnelles de ses Utilisateurs.<br /><br />


Ce document peut être imprimé à des fins de consultation en utilisant la commande d'impression dans les paramètres de tout navigateur.<br /><br />

Propriétaire et Responsable du traitement :<br />
Yann Cotard<br />
111 Avenue d'Ivry<br />
75013 Paris<br /><br />

Courriel de contact du Propriétaire :<br /> cotardyann@orange.fr<br /><br />

Types de Données collectées :<br />
Figurent parmi les types de Données personnelles que cette Application collecte directement ou en recourant à des tiers : prénom; nom de famille; adresse électronique; Traqueurs; Données d'utilisation; adresse IP.<br /><br />

Les détails complets sur chaque type de Données personnelles collectées sont fournis dans les parties consacrées à la présente politique de confidentialité ou par des textes d’explication spécifiques publiés avant la collecte des Données.
Les Données personnelles peuvent être librement fournies par l’Utilisateur, ou, en cas de Données d’utilisation, collectées automatiquement lorsque vous utilisez cette Application.<br /><br />
Sauf indication contraire, toutes les Données demandées par cette Application sont obligatoires et leur absence peut rendre impossible la fourniture des Services par cette Application. Dans le cas où cette Application précise que certaines Données ne sont pas obligatoires, les Utilisateurs sont libres de ne pas les communiquer sans entraîner de conséquences sur la disponibilité ou le fonctionnement du Service.<br /><br />
Les Utilisateurs qui auraient des doutes sur les Données personnelles obligatoires sont invités à contacter le Propriétaire.
Toute utilisation des Cookies – ou d’autres outils de suivi – par cette Application ou par les propriétaires de services tiers utilisés par cette Application vise à fournir le Service demandé par l’Utilisateur, outre les autres finalités décrites dans le présent document.<br /><br />

Les Utilisateurs sont responsables de toute Donnée personnelle de tiers obtenue, publiée ou communiquée par l’intermédiaire de cette Application.<br /><br />

Mode et lieu de traitement des Données :<br /><br />
Méthodes de traitement :<br /><br />
Le Propriétaire prend les mesures de sécurité appropriées afin d’empêcher l’accès, la divulgation, la modification ou la destruction non autorisés des Données.
Le traitement des Données est effectué à l’aide d’ordinateurs ou d’outils informatiques, en suivant les procédures et les modes organisationnels étroitement liés aux finalités indiquées. Outre le Propriétaire, les Données peuvent être accessibles, dans certains cas, à certaines catégories de personnes en charge du fonctionnement de cette Application (administration, ventes, marketing, service juridique, administration du système) ou à des parties externes (telles que les fournisseurs tiers de services techniques, les services de messagerie, les fournisseurs d’hébergement, les entreprises informatiques, les agences de communication) désignées, le cas échéant, comme Sous-traitantes par le Propriétaire. La liste mise à jour de ces parties peut être demandée à tout moment au Propriétaire.<br /><br />

Lieu de traitement : <br />
Les Données sont traitées au siège du Propriétaire et dans tous les autres lieux où sont situées les parties responsables du traitement.
Selon la localisation de l’Utilisateur, les transferts de données peuvent entraîner le transfert des Données de ce dernier vers un pays autre que le sien. Pour en savoir plus sur le lieu de traitement de ces Données transférées, les Utilisateurs peuvent consulter la section qui contient des détails sur le traitement des Données personnelles.<br /><br />

Temps de conservation : <br />
Sauf indication contraire du présent document, les Données personnelles sont traitées et conservées aussi longtemps que requis pour la finalité pour laquelle elles ont été collectées et peuvent être conservées plus longtemps du fait d’une obligation légale applicable ou sur la base du consentement de l’Utilisateur.<br /><br />

Finalités du traitement : <br />
Les Données relatives à l’Utilisateur sont collectées afin de permettre au Propriétaire de fournir son Service, de remplir ses obligations, de répondre aux demandes d’application de la loi, de protéger ses droits et intérêts (ou ceux de ses Utilisateurs ou de tiers), de détecter toute activité malveillante ou frauduleuse, ainsi que ce qui suit : Contacter l'Utilisateur et Analyses.<br /><br />

Pour obtenir des informations précises sur les Données personnelles utilisées pour chaque finalité, l’Utilisateur peut consulter la partie « Informations détaillées sur le traitement des Données personnelles ».<br /><br />

Informations détaillées sur le traitement des Données personnelles : <br />
Les Données personnelles sont collectées pour les finalités suivantes à l'aide de plusieurs services : <br />

Analyses : <br />
Les services que contient cette partie permettent au Propriétaire de surveiller et d’analyser le trafic Web et de suivre l’évolution du comportement de l’Utilisateur.<br /><br />

Matomo (auto-hébergé) (cette Application) : <br />
Matomo est un logiciel analytique utilisé par cette Application pour analyser directement les données sans passer par l'entremise de tierces parties.<br />
Données personnelles traitées : adresse IP; Données d'utilisation; Traqueurs.<br /><br />

Pour vérifier comment Matomo traite ces données vous pouvez consultez cette page:
<Link className="text-sky-400/100" to="https://matomo.org/privacy-policy/" target="_blank" rel="noopener noreferrer">Politique de confidentialité Matomo</Link>
 Cette page est en anglais mais peut être facilement traduite en français en effectuant (une fois arrivé sur la page) click droit et ensuite "Traduire en français"<br /><br />

Les utilisateurs peuvent refuser d'être suivis par notre instance Matomo Analytics en suivant ce lien :<br /><br />
<p><Link to="/consentment">
          <p className="text-orange-400 text-[20px] cursor-pointer flex">
            Refus de suivi par Matomo Analytics
          </p>
        </Link>
        <br /><br /></p>



Contacter l'Utilisateur : <br />
Formulaire de contact (cette Application) :<br />
En remplissant le formulaire de contact avec leurs Données, l’Utilisateur autorise l'utilisation de ces renseignements par cette Application aux fins de répondre aux demandes d'information, de citations ou à toute autre demande tel que l'indique l'en-tête du formulaire.<br />
Données personnelles traitées : adresse électronique; nom de famille; prénom.<br /><br />

Informations complémentaires pour les utilisateurs :<br />
Base juridique du traitement. <br />
Le Propriétaire peut traiter les Données personnelles relatives aux Utilisateurs si l'une des conditions suivantes s’applique :<br />

les Utilisateurs ont donné leur consentement pour une ou plusieurs finalités spécifiques ; A noter : Selon certaines législations, le Propriétaire peut être autorisé à traiter des Données personnelles jusqu'à ce que l'Utilisateur s'y oppose (« opt-out »), sans avoir à dépendre du consentement ou de l'une des bases juridiques suivantes. Cette condition ne s'applique toutefois pas lorsque le traitement des Données personnelles est soumis à la loi européenne sur la protection des données ;<br />
la fourniture de Données est nécessaire pour l'exécution d'un accord avec l'Utilisateur ou pour toute obligation précontractuelle de celui-ci ;<br />
le traitement est nécessaire pour se conformer à une obligation légale à laquelle le Propriétaire est soumis ;<br />
le traitement est lié à une tâche effectuée dans l'intérêt public ou dans l'exercice de l'autorité publique dévolue au Propriétaire ;
le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le Propriétaire ou par un tiers.<br />
Dans tous les cas, le Propriétaire vous aidera volontiers à clarifier la base juridique spécifique qui s'applique au traitement, et en particulier si la fourniture de Données personnelles est une exigence légale ou contractuelle, ou une exigence nécessaire pour conclure un contrat.<br /><br />

Informations complémentaires sur la durée de conservation
Sauf indication contraire du présent document, les Données personnelles sont traitées et conservées aussi longtemps que requis pour la finalité pour laquelle elles ont été collectées et peuvent être conservées plus longtemps du fait d’une obligation légale applicable ou sur la base du consentement de l’Utilisateur.<br /><br />

Par conséquent :<br />

Les Données personnelles collectées à des fins liées à l'exécution d'un contrat entre le Propriétaire et l'Utilisateur doivent être conservées jusqu'à la pleine exécution du contrat.<br />
Les Données personnelles collectées aux fins des intérêts légitimes du Propriétaire doivent être conservées aussi longtemps que nécessaire pour atteindre ces objectifs. Les Utilisateurs peuvent trouver des informations spécifiques concernant les intérêts légitimes poursuivis par le Propriétaire dans les sections correspondantes du présent document ou en contactant le Propriétaire.<br />
Le Propriétaire peut être autorisé à conserver des Données personnelles plus longtemps chaque fois que l’Utilisateur a donné son consentement à un tel traitement, tant que ce consentement n’est pas retiré. En outre, le Propriétaire peut être obligé de conserver des Données personnelles plus longtemps chaque fois que cela est requis pour satisfaire à une obligation légale ou sur ordre d'une autorité.<br />

Une fois la période de conservation expirée, les Données personnelles seront supprimées. Par conséquent, le droit d'accès, le droit d'effacement, le droit de rectification et le droit à la portabilité des données ne peuvent être appliqués après l'expiration de la période de conservation.<br /><br />

Droits des Utilisateurs :<br />
Les Utilisateurs peuvent exercer certains droits concernant leurs Données traitées par le Propriétaire.<br /><br />

Les Utilisateurs ont notamment le droit de faire ce qui suit, dans la mesure où la loi le permet :<br /><br />

Retirer leur consentement à tout moment. Les Utilisateurs ont le droit de retirer leur consentement s'ils ont déjà consenti leur consentement au traitement de leurs Données personnelles.<br />
S'opposer au traitement de leurs Données. Les Utilisateurs ont le droit de s'opposer au traitement de leurs Données si le traitement est effectué sur une base juridique autre que le consentement.<br />
Accéder à leurs Données. Les Utilisateurs ont le droit de savoir si les Données sont traitées par le Propriétaire, d'obtenir des informations sur certains aspects du traitement et d'obtenir une copie des Données en cours de traitement.<br />
Vérifier et obtenir une rectification. Les Utilisateurs ont le droit de vérifier l'exactitude de leurs Données et de demander qu'elles soient mises à jour ou corrigées.<br />
Limiter le traitement de leurs Données. Les Utilisateurs ont le droit de limiter le traitement de leurs Données. Dans ce cas, le Propriétaire traitera leurs Données uniquement pour les stocker.<br />
Faire supprimer ou effacer leurs Données personnelles. Les Utilisateurs ont le droit d'obtenir l'effacement de leurs Données auprès du Propriétaire.<br />
Récupérer leurs Données et les faire transférer à un autre responsable du traitement. Les Utilisateurs ont le droit de récupérer leurs Données dans un format structuré, couramment utilisé et lisible par machine et, si cela est techniquement possible, de les faire transmettre à un autre responsable du traitement sans obstacle d'aucune sorte.<br />
Déposer plainte. Les Utilisateurs ont le droit de déposer une plainte auprès de leur autorité compétente en matière de protection des données.<br />
Les Utilisateurs ont également le droit de connaître la base juridique des transferts de Données vers tout pays étranger et notamment vers toute organisation internationale régie par le droit international public ou créée par deux pays ou plus, comme l'ONU, ainsi que les mesures de sécurité prises par le Propriétaire pour sauvegarder leurs Données.<br /><br />

Informations concernant le droit d'opposition au traitement
Lorsque les Données personnelles sont traitées dans l'intérêt public, dans l'exercice d'une autorité officielle dévolue au Propriétaire ou aux fins des intérêts légitimes poursuivis par celui-ci, les Utilisateurs peuvent s'opposer à ce traitement en fournissant un motif lié à leur situation particulière devant justifier cette opposition.<br /><br />

Les Utilisateurs doivent cependant savoir que si leurs Données personnelles sont traitées à des fins de marketing direct, ils peuvent s'opposer à ce traitement à tout moment, gratuitement et sans aucune justification. Lorsque l’Utilisateur s’oppose au traitement à des fins de prospection, les Données personnelles ne seront plus traitées à ces fins. Pour savoir si le Propriétaire traite des Données personnelles à des fins de marketing direct, les Utilisateurs peuvent se reporter aux sections correspondantes du présent document.<br /><br />

Comment exercer ces droits : <br />
Toute demande d'exercice des droits de l'Utilisateur peut être adressée au Propriétaire grâce aux coordonnées fournies dans le présent document. Ces demandes peuvent être exercées gratuitement et recevront une réponse du Propriétaire, apportant aux Utilisateurs les informations requises par la loi, le plus tôt possible et toujours dans un délai d'un mois. Toute rectification ou tout effacement de Données personnelles ou toute limitation du traitement seront communiqués par le Propriétaire à chaque destinataire auquel les Données personnelles ont été communiquées, le cas échéant, sauf si cela s’avère impossible ou implique un effort disproportionné. À la demande des Utilisateurs, le Propriétaire les renseignera sur ces destinataires.<br /><br />

Informations supplémentaires sur le traitement et la collecte des Données : <br />
Action en justice.<br />
Les Données personnelles de l’Utilisateur peuvent être utilisées à des fins juridiques par le Propriétaire devant les tribunaux ou dans les étapes pouvant conduire à une action en justice résultant d’une utilisation inappropriée de cette Application ou des Services connexes.
L’Utilisateur est conscient du fait que le Propriétaire peut être amené à révéler des Données personnelles à la demande des autorités publiques.<br /><br />

Informations supplémentaires concernant les Données personnelles de l’Utilisateur. <br />
Outre les informations contenues dans la présente politique de confidentialité, cette Application peut fournir à l’Utilisateur des renseignements complémentaires et des informations contextuelles concernant des services particuliers ou la collecte et le traitement des Données personnelles.<br /><br />

Journaux système et maintenance.<br />
À des fins d'exploitation et de maintenance, cette Application et tout service tiers peuvent collecter des fichiers qui enregistrent les interactions avec cette Application (journaux système) ou utiliser à cette fin d'autres Données personnelles (telles que l'adresse IP).<br /><br />

Informations non incluses dans la présente politique :<br />
De plus amples renseignements concernant la collecte ou le traitement des Données personnelles peuvent à tout moment être demandés au Propriétaire. Veuillez consulter les coordonnées figurant au début du présent document.<br /><br />

Modifications de la présente politique de confidentialité<br />
Le Propriétaire se réserve le droit d'apporter des modifications à la présente politique de confidentialité, à tout moment, en informant ses Utilisateurs sur cette page et éventuellement dans cette cette Application ou – pour autant que cela soit techniquement et légalement possible – en envoyant une notification aux Utilisateurs par l'intermédiaire des coordonnées disponibles pour le Propriétaire. Il est fortement recommandé de consulter cette page fréquemment, en se référant à la date de la dernière modification indiquée en bas.<br /><br />

Si les modifications influencent les activités de traitement effectuées sur la base du consentement de l'Utilisateur, le Propriétaire doit recueillir un nouveau consentement de l'Utilisateur lorsque nécessaire.<br /><br />

Définitions et références légales :<br />
Données personnelles (ou Données)<br />
Toute information qui, directement, indirectement ou en relation avec d'autres informations – y compris un numéro d'identification personnel – permet l'identification ou l'identifiabilité d'une personne physique.<br /><br />

Données d’utilisation<br />
Les informations collectées automatiquement par cette Application (ou par des services tiers employés par cette Application), qui peuvent inclure les adresses IP ou les noms de domaines des ordinateurs utilisés par les Utilisateurs qui utilisent cette Application, les adresses URI (Uniform Resource Identifier ou identifiant uniforme de ressource), l’heure de la demande, la méthode utilisée pour soumettre la demande au serveur, la taille du fichier reçu en réponse, le code numérique indiquant le statut de la réponse du serveur (résultat favorable, erreur, etc.), le pays d’origine, les caractéristiques du navigateur et du système d’exploitation utilisés par l’Utilisateur, les différents détails relatifs au temps par visite (p. ex. temps passé sur chaque page dans l’Application) et les détails relatifs au chemin suivi dans l’Application avec une référence spéciale à la séquence des pages visitées, et d’autres paramètres concernant le système d’exploitation ou l’environnement informatique de l’Utilisateur.<br /><br />

Utilisateur :<br />
La personne utilisant cette Application qui, sauf indication contraire, correspond à la Personne concernée.<br /><br />

Personne concernée :<br />
La personne physique à laquelle les Données personnelles font référence.<br /><br />

Sous-traitant :<br />
La personne physique ou morale, l'autorité publique, l'institution ou tout autre organisme qui traite les Données personnelles pour le compte du Responsable du traitement, tel que décrit dans la présente politique de confidentialité.<br /><br />

Responsable du traitement (ou Propriétaire) <br />
La personne physique ou morale, l’autorité publique, l'institution ou toute autre organisme qui, seul ou conjointement avec d’autres, détermine les finalités et les moyens du traitement de Données personnelles, y compris les mesures de sécurité concernant le fonctionnement et l'utilisation de cette Application. Sauf mention contraire, le Responsable du traitement est le Propriétaire de cette Application.<br /><br />

Cette Application<br />
Les moyens par lesquels les Données personnelles de l'Utilisateur sont collectées et traitées.<br /><br />

Service<br />
Le service fourni par cette Application comme décrit dans les conditions s'y rapportant (le cas échéant) et sur ce site/cette application.<br /><br />

Union européenne (ou UE)<br />
Sauf indication contraire, toutes les références faites dans le présent document à l'Union européenne incluent tous les États membres actuels de l'Union européenne et de l'Espace économique européen.<br /><br />

Cookie<br />
Les Cookies sont des Traqueurs constitués de petits ensembles de données stockés dans le navigateur de l’Utilisateur.<br /><br />

Traqueurs<br />
Un Traqueur indique toute technologie – par exemple, les Cookies, les identifiants uniques, les balises Web, les scripts intégrés, les balises électroniques et les empreintes digitales – permettant de suivre les Utilisateurs, par exemple en accédant à des informations ou en les stockant sur l’appareil de l’Utilisateur.<br /><br />

Informations légales<br />
Cette politique de confidentialité concerne uniquement cette Application, sauf indication contraire dans le présent document.<br /><br />

Dernière mise à jour : 29 août 2023<br /><br />


      </p>

      <Link to="/">
        <div className="flex  items-center gap-2 mb-20">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain ml-16" />
          <p className="text-white/[0.6] text-[20px]  font-bold cursor-pointer flex">
            Retour au site.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Privacy;
