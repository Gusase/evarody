import telegram from "@/assets/telegram.svg";
import github from "@/assets/github.svg";
import mastodon from "@/assets/mastodon.svg";
import linkedin from "@/assets/linkedin.svg"
import x from "@/assets/x.svg";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";

enum SocialPlatform {
  GitHub = "GitHub",
  Telegram = "Telegram",
  Mastodon = "Mastodon",
  Linkedin = "LinkedIn",
  X = "X (fka Twitter)",
  Instagram = "Instagram",
  Facebook = "Facebook",
}

type Social = {
  platform: SocialPlatform;
  src: string;
  link: string;
  visibleOnMainpage: boolean;
};

export const socials: Social[] = [
  {
    platform: SocialPlatform.GitHub,
    src: github,
    link: "https://github.com/gusase",
    visibleOnMainpage: true,
  },
  {
    platform: SocialPlatform.Telegram,
    src: telegram,
    link: "https://gusesa_gag.t.me",
    visibleOnMainpage: true,
  },
  {
    platform: SocialPlatform.Mastodon,
    src: mastodon,
    link: "https://mastodon.social/@gusase",
    visibleOnMainpage: true,
  },
  {
    platform: SocialPlatform.Linkedin,
    src: linkedin,
    link: "https://linkedin.com/in/gusase",
    visibleOnMainpage: false,
  },
  {
    platform: SocialPlatform.X,
    src: x,
    link: "https://x.com/evarody_",
    visibleOnMainpage: false,
  },
  {
    platform: SocialPlatform.Instagram,
    src: instagram,
    link: "https://www.instagram.com/gusesa.gag",
    visibleOnMainpage: false,
  },
  {
    platform: SocialPlatform.Facebook,
    src: facebook,
    link: "https://www.facebook.com/gusase35",
    visibleOnMainpage:false,
  },
];
