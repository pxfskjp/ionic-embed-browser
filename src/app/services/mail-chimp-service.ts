export class MailChimpService {

  constructor() { }

  isShowMailChimpForm() {
    const mailChimp = localStorage.getItem('mailChimp') === 'true';
    const mailChimpLocal = localStorage.getItem('mailChimpLocal') === 'true';
    if (mailChimp) {
      return true;
    } else {
      return mailChimpLocal;
    }
  }

  setMailChimpForm(isVisible: boolean) {
    localStorage.setItem('mailChimpLocal', isVisible + '');
  }

  hideMailChimp() {
    localStorage.setItem('mailChimp', 'true');
  }
}
