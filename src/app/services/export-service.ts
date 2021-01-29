import { HomeService } from './home-service';
import { IntroService } from './intro-service';
import { TabsService } from './tabs-service';
import { MenuService } from './menu-service';
import { NewPasswordService } from './new-password-services';
import { ForgetPasswordService } from './forget-password-services';
import { AlertService } from './alert-service';
import { CheckBoxService } from './check-box-service';
import { SearchBarService } from './search-bar-service';
import { WizardService } from './wizard-service';
import { LoginService } from './login-service';
import { RegisterService } from './register-service';
import { ListViewExpandableService } from './list-view-expandable-service';
import { ListViewDragAndDropService } from './list-view-drag-and-drop-service';
import { ListViewSwipeToDismissService } from './list-view-swipe-to-dismiss-service';
import { ListViewGoogleCardsService } from './list-view-google-card-service';
import { ParallaxService } from './parallax-service';
import { ImageGalleryService } from './image-gallery-service';
import { MapsService } from './maps-service';
import { QRCodeService } from './qrcode-service';
import { RadioButtonService } from './radio-button-service';
import { RangeService } from './range-service';
import { ToggleService } from './toggle-service';
import { SelectService } from './select-service';
import { ActionSheetService } from './action-sheet-service';
import { TimeLineService } from './time-line-service';
import { FormService } from './form-service';
import { CommentService } from './comment-service';
import { ProfileService } from './profile-service';
import { PaymentService } from './payment-service';
import { SegmentService } from './segment-service';
import { ScrollSegmentService } from './scroll-segment-service';
import { Injectable } from '@angular/core';
import { AnimationService } from './animation-service';

@Injectable()
export class ExportService{
    export() {
        return {
            'actionSheet': this.getActionSheet(),
            'alert': this.getAlert(),
            'checkBoxes': this.getCheckBox(),
            'comment': this.getComment(),
            'forgetPassword': this.getForgetPassword(),
            'form': this.getForm(),
            'menu':this.getMenu(),
            'home': this.getHome(),
            'imageGallery': this.getImageGallery(),
            'intro': this.getIntro(),
            'listView': {
                'dragAndDrop':this.getListViewDragAndDrop(),
                'expandable':this.getListViewExpandable(),
                'googleCards':this.getListViewGoogleCards(),
                'swipeToDismiss':this.getListViewSwipeToDismiss()
            },
            'login': this.getLogin(),
            'maps':this.getMaps(),
            'newPassword' : this.getNewPassword(),
            'parallax':this.getParallax(),
            'payment':this.getPayment(),
            'profile':this.getProfile(),
            'radioButton': this.getRadioButton(),
            'ranges': this.getRange(),
            'qrcode':this.getQRCode(),
            'register': this.getRegister(),
            'searchBars':this.getSearchBar(),
            'segment':this.getSegment(),
            'scrollSegment':this.getScrollSegment(),
            'select':this.getSelect(),
            'tab':this.getTabs(),
            'timeline':this.getTimeLine(),
            'toggle':this.getToggle(),
            'wizard':this.getWizard(),
            'animation': this.getAnimation()
        }
    }

    getNewPassword() {
        let service = new NewPasswordService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        }
    }

    getForgetPassword() {
        let service = new ForgetPasswordService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        }
    }

    getAlert() {
        let service = new AlertService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getCheckBox() {
        let service = new CheckBoxService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getSearchBar() {
        let service = new SearchBarService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getWizard() {
        let service = new WizardService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        }
    }

    getLogin() {
        let service = new LoginService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        }
    }

    getRegister() {
        let service = new RegisterService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        }
    }

    getListViewExpandable() {
        let service = new ListViewExpandableService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getListViewDragAndDrop() {
        let service = new ListViewDragAndDropService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getListViewSwipeToDismiss() {
        let service = new ListViewSwipeToDismissService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getListViewGoogleCards() {
        let service = new ListViewGoogleCardsService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        }
    }

    getParallax() {
        let service = new ParallaxService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        }
    }

    getImageGallery() {
        let service = new ImageGalleryService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getMaps() {
        let service = new MapsService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getQRCode() {
        let service = new QRCodeService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2()
        }
    }

    getRadioButton() {
        let service = new RadioButtonService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getRange() {
        let service = new RangeService(null, null);
        return  service.getDataForTheme(null);
    }

    getToggle() {
        let service = new ToggleService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getSelect() {
        let service = new SelectService(null, null);
        return service.getDataForTheme(null)
    }

    getActionSheet() {
        let service = new ActionSheetService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getTimeLine() {
        let service = new TimeLineService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getComment() {
        let service = new CommentService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        }
    }

    getForm() {
        let service = new FormService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        }
    }

    getProfile() {
        let service = new ProfileService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
            'layout5': service.getDataForLayout5(),
        }
    }

    getPayment() {
        let service = new PaymentService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
        }
    }

    getSegment() {
        let service = new SegmentService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getScrollSegment() {
        let service = new ScrollSegmentService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        }
    }

    getMenu() {
        let service = new MenuService(null, null);
        return service.getDataForTheme(null)
    }
    
    getIntro() {
        let service = new IntroService(null, null);
        return service.getData()
    }

    getHome() {
        let service = new HomeService(null);
        return service.getData()
    }

    getAnimation() {
        let service = new AnimationService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
            'layout5': service.getDataForLayout5(),
            'layout6': service.getDataForLayout6(),
            'layout7': service.getDataForLayout7(),
            'layout8': service.getDataForLayout8(),
            'layout9': service.getDataForLayout9(),
            'layout10': service.getDataForLayout10(),
        }
    }

    getTabs() {
        let service = new TabsService(null, null);
        return {
            'tab1': service.getDataForTab1(),
            'tab2': service.getDataForTab2(),
            'tab3': service.getDataForTab3(),
            'tab4': service.getDataForTab4(),
            'tab5': service.getDataForTab5(),
            'tab6': service.getDataForTab6(),
            'tab7': service.getDataForTab7(),
            'tab8': service.getDataForTab8(),
            'tab9': service.getDataForTab9(),
        }
    }
}