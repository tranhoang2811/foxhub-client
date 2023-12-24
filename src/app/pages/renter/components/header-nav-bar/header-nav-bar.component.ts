import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from '../../home/components/log-in-modal/log-in-modal.component';
import { SignUpModalComponent } from '../../home/components/sign-up-modal/sign-up-modal.component';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css'],
})
export class HeaderNavBarComponent {
  public isLoggedIn: boolean = false;
  public userProfile: IUser | null = null;
  public avatar: string = '';
  public currentTab: string = '';

  constructor(
    private modelService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.getTabName();
  }

  public openLogInModal(): void {
    const logInModal = this.modelService.open(LogInModalComponent, {
      centered: true,
      modalDialogClass: 'log-in-modal',
    });
    logInModal.componentInstance.onOpenSignupModal.subscribe(() => {
      logInModal.close();
      this.openSignUpModal();
    });
    logInModal.componentInstance.onLogin.subscribe(() => {
      this.getUserProfile();
    });
  }

  public openSignUpModal(): void {
    const signUpModal = this.modelService.open(SignUpModalComponent, {
      centered: true,
      modalDialogClass: 'sign-up-modal',
    });
    signUpModal.componentInstance.onOpenLogInModal.subscribe(() => {
      signUpModal.close();
      this.openLogInModal();
    });
  }

  public onAvatarError(): void {
    const url = `https://ui-avatars.com/api/?name=${this.userProfile?.lastName}&background=random&rounded=true&color=fff`;
    this.avatar = url;
  }

  private getTabName(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.currentTab = url[1].path;
    });
  }

  private getUserProfile(): void {
    this.authService.getUserProfile().subscribe({
      next: (userProfile: IUser) => {
        this.userProfile = userProfile;
        this.getAvatarUrl(userProfile.avatar || '');
        this.isLoggedIn = true;
      },
    });
  }

  public getAvatarUrl(fileName: string): void {
    this.fileService.getAvatarUrl(fileName).subscribe({
      next: (url: string) => {
        this.avatar = url;
      },
      error: () => {
        this.onAvatarError();
      },
    });
  }

  public logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('isRememberMe');
    sessionStorage.removeItem('token');
    this.userProfile = null;
    this.isLoggedIn = false;
  }
}
