import telegram from "../../assets/telegram.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import mastodon from "../../assets/mastodon.svg";

type Social = {
  txt: string;
  src: string;
  link: string;
};

export const socials: Social[] = [
  {
    txt: "GitHub",
    src: github,
    link: "https://github.com/gusase",
  },
  {
    txt: "Telegram",
    src: telegram,
    link: "https://evarody.t.me",
  },
  {
    txt: "LinkedIn",
    src: linkedin,
    link: "https://linkedin.com/in/gusase",
  },
  {
    txt: "Mastodon",
    src: mastodon,
    link: "https://mastodon.social/@gusase",
  },
];
