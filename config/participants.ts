/**
 * Participants Configuration — AWS Community GameDay Europe 2026
 *
 * This file is injected into the stream template at build time.
 * It feeds every composition that shows organizers or user groups.
 *
 * To adapt for a new edition:
 * - Update ORGANIZERS with your community organizers
 * - Update AWS_SUPPORTERS with your AWS contacts
 * - Update USER_GROUPS with all participating groups
 * - Add face photos to public/faces/ (firstname.jpg, all lowercase)
 *
 * Face images are served from: public/assets/faces/
 * Reference them here as: "assets/faces/firstname.jpg"
 */

// ── Organizer Interface ──────────────────────────────────────────────────────
export interface Organizer {
  name: string;
  role: string;
  country: string;
  flag: string;
  face: string;
  type: "community" | "aws";
}

// ── Community Organizers ─────────────────────────────────────────────────────
export const ORGANIZERS: Organizer[] = [
  { name: "Jerome",  role: "AWS User Group Belgium",     country: "Belgium",     flag: "🇧🇪", face: "assets/faces/jerome.jpg",  type: "community" },
  { name: "Anda",    role: "AWS User Group Geneva",      country: "Switzerland", flag: "🇨🇭", face: "assets/faces/anda.jpg",    type: "community" },
  { name: "Marcel",  role: "AWS User Group Münsterland", country: "Germany",     flag: "🇩🇪", face: "assets/faces/marcel.jpg",  type: "community" },
  { name: "Linda",   role: "AWS User Group Vienna",      country: "Austria",     flag: "🇦🇹", face: "assets/faces/linda.jpg",   type: "community" },
  { name: "Manuel",  role: "AWS User Group Frankfurt",   country: "Germany",     flag: "🇩🇪", face: "assets/faces/manuel.jpg",  type: "community" },
  { name: "Andreas", role: "AWS User Group Bonn",        country: "Germany",     flag: "🇩🇪", face: "assets/faces/andreas.jpg", type: "community" },
  { name: "Lucian",  role: "AWS User Group Timisoara",   country: "Romania",     flag: "🇷🇴", face: "assets/faces/lucian.jpg",  type: "community" },
  { name: "Mihaly",  role: "AWS User Group Budapest",    country: "Hungary",     flag: "🇭🇺", face: "assets/faces/mihaly.jpg",  type: "community" },
];

// ── AWS Supporters (Gamemasters & Community Team) ────────────────────────────
export const AWS_SUPPORTERS: Organizer[] = [
  { name: "Test", role: "Sr. Developer Advocate, AWS",        country: "Gamemaster",              flag: "🎮", face: "assets/faces/arnaud.jpg", type: "aws" },
  { name: "Loïc",   role: "Sr. Technical Account Manager, AWS", country: "Gamemaster",              flag: "🎮", face: "assets/faces/loic.jpg",   type: "aws" },
  { name: "Uliana", role: "Community Manager, AWS",             country: "DACH, CEE, CEAR & MENAT", flag: "🌍", face: "assets/faces/uliana.jpg", type: "aws" },
  { name: "Natalia",role: "DevEx Community Manager, AWS",       country: "EMEA / Europe South",     flag: "🌍", face: "assets/faces/natalia.jpg",type: "aws" },
];

// ── User Group Interface ─────────────────────────────────────────────────────
export interface UserGroup {
  flag: string;
  name: string;
  city: string;
  logo?: string; // Logo URL — no need for a separate logos.ts
}

// ── All 57 Participating User Groups ─────────────────────────────────────────
// AWS Community GameDay Europe 2026
export const USER_GROUPS: UserGroup[] = [
  { flag: "🇪🇸", name: "AWS Barcelona User Group",        city: "Barcelona, Spain",                   logo: "https://secure.meetupstatic.com/photos/event/3/9/f/8/clean_502239864.webp" },
  { flag: "🇬🇧", name: "AWS Leeds User Group",            city: "Leeds, United Kingdom",              logo: "https://awscommunitydach.notion.site/image/attachment%3Aa44fddbe-f136-4e7c-921b-3b136bf669a8%3AAWS_Leeds_User_Group_-_Leeds_United_Kingdom.png?table=block&id=3090df17-987f-805b-9f0e-cd82e57e193a&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇫🇮", name: "AWS Meetup JKL",                  city: "Jyväskylä, Finland",                 logo: "https://awscommunitydach.notion.site/image/attachment%3Ac12d3c97-2d59-49c7-982d-f69ba78b97ab%3AAWS_Meetup_JKL_-_Jyvaskyla_Finland.jpg?table=block&id=3090df17-987f-80d7-8c85-c4635d0cd9f6&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇨🇭", name: "AWS Swiss UG – Lausanne",         city: "Lausanne, Switzerland",              logo: "https://awscommunitydach.notion.site/image/attachment%3A29167be8-f7e3-4bbf-a2e2-c5900e748ed2%3AAWS_Swiss_User_Group_Lausanne_-_Lausanne_Switzerland.jpg?table=block&id=3090df17-987f-8087-aac2-f8f70f8e73e5&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇨🇭", name: "AWS Swiss UG – Zürich",           city: "Zürich, Switzerland",                logo: "https://awscommunitydach.notion.site/image/attachment%3Aca72070d-6b0e-485b-8aba-982587338967%3AAWS_Swiss_User_Group_Zurich_-_Zurich_Switzerland.png?table=block&id=3090df17-987f-8080-a059-c39afedbd2ad&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇨🇭", name: "AWS Swiss UG – Geneva",           city: "Geneva, Switzerland",                logo: "https://awscommunitydach.notion.site/image/attachment%3Ab00df73a-3fce-4ab6-9160-f26c286ddc57%3AAWS_Swiss_User_Group_Geneva_-_Geneva_Switzerland.jpg?table=block&id=3090df17-987f-805d-9d4b-d332f0de2d65&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇷🇴", name: "AWS Transylvania Cloud",          city: "Cluj-Napoca, Romania",               logo: "https://secure.meetupstatic.com/photos/event/5/1/f/clean_528241311.webp" },
  { flag: "🇵🇱", name: "AWS User Group 3City",            city: "Gdansk, Poland",                     logo: "https://awscommunitydach.notion.site/image/attachment%3A084ad48f-6cc9-42a1-94bf-d80ba67cbcf4%3AAWS_User_Group_3city_-_Gdansk_Poland.jpg?table=block&id=3090df17-987f-80b9-9bb2-d8fe382296e4&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇪🇸", name: "AWS UG Asturias",                 city: "Oviedo, Spain",                      logo: "https://secure.meetupstatic.com/photos/event/7/c/9/e/clean_502516158.webp" },
  { flag: "🇬🇷", name: "AWS User Group Athens",           city: "Athens, Greece",                     logo: "https://secure.meetupstatic.com/photos/event/a/1/8/b/clean_520181355.webp" },
  { flag: "🇧🇪", name: "AWS User Group Belgium",          city: "Brussels, Belgium",                  logo: "https://awscommunitydach.notion.site/image/attachment%3Aa2bebf97-0c45-43d1-bc06-f05186e7711b%3AAWS_User_Group_Belgium_-_Brussels_Belgium.jpg?table=block&id=3090df17-987f-8051-8049-de5a1b58677b&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "AWS User Group Bonn",             city: "Bonn, Germany",                      logo: "https://awscommunitydach.notion.site/image/attachment%3A652f7195-fe23-4fc9-9dec-e862255aba76%3AAWS_User_Group_Bonn_-_Bonn_germany.jpg?table=block&id=3090df17-987f-80a8-a0f3-d6b462249f59&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇭🇺", name: "AWS User Group Budapest",         city: "Budapest, Hungary",                  logo: "https://awscommunitydach.notion.site/image/attachment%3A148c8f1c-2ddc-4255-b9de-344b7550fe79%3AAWS_User_Group_Budapest_-_Budapest_Hungary.jpg?table=block&id=3090df17-987f-8029-95fd-e8c5481a7776&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "AWS User Group Cologne",          city: "Köln, Germany",                      logo: "https://awscommunitydach.notion.site/image/attachment%3A240fd818-b943-4532-9d48-e4f87fe3172c%3ACologne_AWS_User_Group_-_Koln_Germany.jpg?table=block&id=3090df17-987f-8069-ad76-c7655e401938&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇮🇹", name: "AWS User Group Cuneo",            city: "Cuneo, Italy" },
  { flag: "🇩🇪", name: "AWS User Group Dortmund",         city: "Dortmund, Germany",                  logo: "https://awscommunitydach.notion.site/image/attachment%3A78b9d449-4c9f-4255-bfa0-e8bd64d32db4%3ADortmund_AWS_User_Group_-_Dortmund_Germany.jpg?table=block&id=3090df17-987f-8018-ba9b-fc837e852a94&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇫🇮", name: "AWS User Group Finland",          city: "Helsinki, Finland",                  logo: "https://awscommunitydach.notion.site/image/attachment%3Af0afbb70-a7cd-447b-b7e0-e15236dd1f9d%3AAWS_User_Group_Finland_-_Helsinki_Finland.png?table=block&id=3090df17-987f-8060-94cd-d7e2d581c4b9&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇫🇷", name: "AWS UG France – Paris",           city: "Paris, France",                      logo: "https://awscommunitydach.notion.site/image/attachment%3A440eff7c-bf83-4ea8-891f-92ff06f4d21c%3AParis_AWS_User_Group_-_Paris_France.jpg?table=block&id=3090df17-987f-80ed-a3a8-dbcef6dccad2&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇪🇸", name: "AWS UG Galicia",                  city: "Santiago de Compostela, Spain",      logo: "https://secure.meetupstatic.com/photos/event/3/3/1/c/clean_531253084.webp" },
  { flag: "🇮🇹", name: "AWS User Group Genova",           city: "Genova, Italy",                      logo: "https://secure.meetupstatic.com/photos/event/c/d/8/2/clean_530272610.webp" },
  { flag: "🇩🇪", name: "AWS User Group Hannover",         city: "Hannover, Germany" },
  { flag: "🇳🇴", name: "AWS UG Innlandet",                city: "Hamar, Norway",                      logo: "https://secure.meetupstatic.com/photos/event/4/4/a/5/clean_529097573.webp" },
  { flag: "🇹🇷", name: "AWS User Group Istanbul",         city: "Istanbul, Turkey",                   logo: "https://awscommunitydach.notion.site/image/attachment%3A210e3fe7-e492-420e-a9e1-ef2d70afa6f1%3AAWS_User_Group_Turkey_-_Istanbul_Turkey.jpg?table=block&id=3090df17-987f-809d-881a-c7c59fdb0af8&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇺🇦", name: "AWS UG Ivano-Frankivsk",          city: "Ivano-Frankivsk, Ukraine",           logo: "https://secure.meetupstatic.com/photos/event/7/7/3/b/clean_487470523.webp" },
  { flag: "🇫🇮", name: "AWS User Group Kuopio",           city: "Kuopio, Finland",                    logo: "https://awscommunitydach.notion.site/image/attachment%3A2f05ce9c-c63e-4080-8f80-880301a5b998%3AAWS_User_Group_Kuopio_-_Kuopio_Finland.jpg?table=block&id=3090df17-987f-80b1-8111-eeb36b08eba1&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇸🇮", name: "AWS UG Ljubljana",                city: "Ljubljana, Slovenia",                logo: "https://awscommunitydach.notion.site/image/attachment%3A2de4f682-f74e-4056-af49-cd8d337ef179%3AAWS_User_Group_Ljubljana_-_Ljubljana_Slovenia.png?table=block&id=3090df17-987f-80b9-bab5-c68e213f911c&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇲🇰", name: "AWS UG Macedonia",                city: "Skopje, Macedonia",                  logo: "https://secure.meetupstatic.com/photos/event/3/3/2/8/clean_502273096.webp" },
  { flag: "🇪🇸", name: "AWS User Group Malaga",           city: "Malaga, Spain",                      logo: "https://secure.meetupstatic.com/photos/event/6/c/6/clean_531001734.webp" },
  { flag: "🇲🇩", name: "AWS UG Moldova",                  city: "Chisinau, Moldova",                  logo: "https://awscommunitydach.notion.site/image/attachment%3A52a37661-a6ae-4f8d-847f-9e0a26df51c7%3AAWS_User_Group_Moldova_-_Moldova.jpg?table=block&id=3090df17-987f-8039-8c3e-ef837910c9e0&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇲🇪", name: "AWS UG Montenegro",               city: "Podgorica, Montenegro",              logo: "https://awscommunitydach.notion.site/image/attachment%3Ad3a48bac-2ef9-4cf6-82a3-85199a27667b%3AAWS_User_Group_Montenegro_-_Podgorica_Montenegro.jpg?table=block&id=3090df17-987f-80aa-9dd7-c69f703ccc70&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "AWS User Group Munich",           city: "München, Germany",                   logo: "https://awscommunitydach.notion.site/image/attachment%3Af48e601c-e720-4b42-b3ad-4bf32cecef88%3AAWS_Munich_-_Munchen_Germany.jpg?table=block&id=3090df17-987f-807a-bd78-ebfbee2a149e&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "AWS UG Münsterland",              city: "Münster, Germany",                   logo: "https://awscommunitydach.notion.site/image/attachment%3A58b1df12-0f74-4e33-a45f-b5483b9c6301%3AAWS_Usergroup_Munsterland_-_Munster_Germany.jpg?table=block&id=3090df17-987f-8027-b00e-e8dea5e84c03&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇮🇹", name: "AWS User Group Napoli",           city: "Naples, Italy",                      logo: "https://awscommunitydach.notion.site/image/attachment%3A4132f77a-721f-4c63-841d-6649470dff7f%3AAWS_User_Group_Napoli_-_Italy.jpg?table=block&id=3090df17-987f-8055-a3ef-dee8ce546a89&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "AWS UG Nürnberg",                 city: "Nürnberg, Germany",                  logo: "https://awscommunitydach.notion.site/image/attachment%3Ad2da7026-4d46-461f-8b63-e4573f03d656%3ANurnberg_AWS_User_Group_-_Nurnberg_Germany.png?table=block&id=3090df17-987f-8081-a841-e0cd46ba9938&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇳🇴", name: "AWS UG Oslo",                     city: "Oslo, Norway",                       logo: "https://awscommunitydach.notion.site/image/attachment%3A51051ff8-2cd3-4d97-8fe4-ac76c6503bf2%3AAWS_User_Group_Norway_-_Oslo_Norway.jpg?table=block&id=3090df17-987f-80b3-a66b-c3cab5b38750&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇮🇹", name: "AWS User Group Pavia",            city: "Pavia, Italy",                       logo: "https://awscommunitydach.notion.site/image/attachment%3Aae1c6de3-8814-459a-81c6-073d54331b14%3AAWS_User_Group_Pavia_-_Pavia_Italy.jpg?table=block&id=3090df17-987f-8044-bd3c-cde5cf058d4f&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇮🇹", name: "AWS User Group Roma",             city: "Roma, Italy",                        logo: "https://awscommunitydach.notion.site/image/attachment%3A3dc7bd7a-82eb-4c40-9fd8-15fd273eb535%3AAWS_User_Group_Roma_-_Rome_Italy.jpg?table=block&id=3090df17-987f-8052-bba4-f2aa19fd9a50&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇮🇹", name: "AWS User Group Salerno",          city: "Salerno, Italy",                     logo: "https://secure.meetupstatic.com/photos/event/9/9/2/5/clean_531519205.webp" },
  { flag: "🇧🇦", name: "AWS UG Sarajevo",                 city: "Sarajevo, Bosnia & Herzegovina",     logo: "https://awscommunitydach.notion.site/image/attachment%3A97503699-83ed-4c84-9c50-c5f77993de47%3AAWS_User_Group_Sarajevo_-_Sarajevo_Bosnia__Herzegovina.jpg?table=block&id=3090df17-987f-807e-8d08-edc9676227b8&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇸🇪", name: "AWS UG Skåne",                    city: "Malmö, Sweden",                      logo: "https://awscommunitydach.notion.site/image/attachment%3Ae208f290-0a3a-4899-bc78-7c7e881db78b%3AAWS_User_Group_Oresund_-_Malmo_Sweden.jpg?table=block&id=3090df17-987f-809e-9966-d1421cac51f6&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇫🇮", name: "AWS UG Tampere",                  city: "Tampere, Finland",                   logo: "https://awscommunitydach.notion.site/image/attachment%3A70f51313-d2a2-4abf-b213-96fbf8ce997e%3AAWS_User_Group_Tampere_-_Tampere_Finland.png?table=block&id=3090df17-987f-80de-bb20-c625cca80e58&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇨🇭", name: "AWS UG Ticino",                   city: "Lugano, Switzerland",                logo: "https://awscommunitydach.notion.site/image/attachment%3A495bf9b6-57f4-4ad2-bd8c-e4cde0dc88a2%3AAWS_User_Group_Ticino_-_Lugano_Switzerland.jpg?table=block&id=3090df17-987f-8051-9f72-f8d3eaf4df64&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇷🇴", name: "AWS UG Timisoara",                city: "Timisoara, Romania",                 logo: "https://awscommunitydach.notion.site/image/attachment%3Aa03c9dfb-469d-4a4c-ba98-e34b7018cb92%3AAWS__User_Group_Timisoara_-_Timisoara_Romania.jpg?table=block&id=3090df17-987f-80ac-86ba-d6e30a97d859&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇮🇹", name: "AWS UG Venezia",                  city: "Venice, Italy",                      logo: "https://awscommunitydach.notion.site/image/attachment%3A7ababf38-9742-431b-a201-a7210dc325cb%3AAWS_User_Group_Venezia_-_Venezia_Italy.jpg?table=block&id=3090df17-987f-80d8-98dd-d12bb63c8026&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇦🇹", name: "AWS User Group Vienna",           city: "Vienna, Austria",                    logo: "https://awscommunitydach.notion.site/image/attachment%3A7f5dcfa0-c808-411f-85e7-b8b2283e2c5a%3AAWS_Vienna_-_Vienna_Austria.jpg?table=block&id=3090df17-987f-80a9-a26b-de59a394b30a&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇵🇱", name: "AWS UG Warsaw",                   city: "Warsaw, Poland",                     logo: "https://awscommunitydach.notion.site/image/attachment%3A58635b85-fd99-4dd8-a0da-1913d3a98ef3%3AAWS_User_Group_Warsaw_-_Warsaw_Poland.jpg?table=block&id=3090df17-987f-801c-bfe4-ee51e920bdfa&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇬🇧", name: "AWS UG West Midlands",            city: "Birmingham, United Kingdom",         logo: "https://awscommunitydach.notion.site/image/attachment%3A892b6ef0-6c26-47ad-b449-6623888e9c1e%3AAWS_User_Group_West_Midlands_-_Birmingham_United_Kingdom.jpg?table=block&id=3090df17-987f-807a-8e73-dc4b97fbf9a7&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇮🇹", name: "AWS Well-Architected UG Italy",   city: "Milano, Italy",                      logo: "https://secure.meetupstatic.com/photos/event/b/a/9/8/clean_528767768.webp" },
  { flag: "🇩🇪", name: "AWS Women's UG Munich",           city: "Munich, Germany",                    logo: "https://awscommunitydach.notion.site/image/attachment%3A99618fea-90aa-4f27-a8ce-ffd190cdbcba%3AAWS_Womens_User_Group_Munich_-_Munich_Germany.jpg?table=block&id=3090df17-987f-80d5-9c37-ceb479ea4ab7&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "Berlin AWS User Group",           city: "Berlin, Germany",                    logo: "https://awscommunitydach.notion.site/image/attachment%3A70c06203-3c89-4f2b-9695-d85640023ca4%3ABerlin_AWS_User_Group_-_Berlin_Germany.jpg?table=block&id=3090df17-987f-8057-9354-fb9723d73f03&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇷🇴", name: "Bucharest AWS User Group",        city: "Bucharest, Romania",                 logo: "https://awscommunitydach.notion.site/image/attachment%3Abf4634c6-0332-44b7-8f15-d16ccef38448%3ABucharest_AWS_User_Group_-_Bucharest_Romania.jpg?table=block&id=3090df17-987f-80b2-b533-f7e2daac4971&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "Dresden AWS User Group",          city: "Dresden, Germany",                   logo: "https://secure.meetupstatic.com/photos/event/a/0/1/e/clean_502615454.webp" },
  { flag: "🇩🇪", name: "Frankfurt AWS User Group",        city: "Frankfurt, Germany",                 logo: "https://secure.meetupstatic.com/photos/event/b/4/5/f/clean_495406175.webp" },
  { flag: "🇫🇷", name: "Grenoble AWS User Group",         city: "Grenoble, France",                   logo: "https://awscommunitydach.notion.site/image/attachment%3A8ef6d052-53ab-491b-ae2c-c14b03044c8a%3AGrenoble_AWS_User_Group_-_Grenoble_France.jpg?table=block&id=3090df17-987f-8016-b4dd-d9f72c4126c0&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇩🇪", name: "Leipzig AWS User Group",          city: "Leipzig, Germany",                   logo: "https://secure.meetupstatic.com/photos/event/9/e/0/0/clean_502613632.webp" },
  { flag: "🇫🇷", name: "Lille AWS User Group",            city: "Lille, France",                      logo: "https://awscommunitydach.notion.site/image/attachment%3A1a091f05-3e63-4354-991c-76a39daa80fa%3ALille_AWS_AWS_User_Group_-_Lille_France_France.png?table=block&id=3090df17-987f-8027-855b-c340ccc15ee1&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
  { flag: "🇫🇷", name: "Poitiers AWS User Group",         city: "Poitiers, France",                   logo: "https://awscommunitydach.notion.site/image/attachment%3Afca95638-4901-4897-9b52-5f0ca71aed0a%3APoitiers_AWS_User_Group_-_Poitiers_France.jpg?table=block&id=3090df17-987f-801e-8826-ed2b5ad82cbc&spaceId=a54b381a-7fea-4896-b7cd-6ef5fe2ecb82&width=520&userId=&cache=v2" },
];

export const COUNTRIES = Array.from(new Set(USER_GROUPS.map((g) => g.flag)));
