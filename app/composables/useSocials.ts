export const useSocials = () => {
  return computed(() => [
    {
      label: 'Instagram',
      icon: 'i-tabler-brand-instagram',
      to: 'https://www.instagram.com/CREUPCREUP'
    },
    {
      label: 'TikTok',
      icon: 'i-tabler-brand-tiktok',
      to: 'https://www.tiktok.com/@creupestudiantes'
    },
    {
      label: 'X',
      icon: 'i-tabler-brand-x',
      to: 'https://x.com/CREUPCREUP'
    },
    {
      label: 'LinkedIn',
      icon: 'i-tabler-brand-linkedin',
      to: 'https://www.linkedin.com/company/creup'
    },
    {
      label: 'Facebook',
      icon: 'i-tabler-brand-facebook',
      to: 'https://www.facebook.com/CREUPCREUP'
    },
    {
      label: 'Telegram',
      icon: 'i-tabler-brand-telegram',
      to: 'https://telegram.me/CREUP'
    }
  ])
}
