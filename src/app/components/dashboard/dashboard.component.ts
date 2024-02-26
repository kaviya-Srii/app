import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private router: Router) {}
  handleNotificationHover(isHovered: boolean) {
    if (isHovered) {
      console.log('Notification hovered');
    } else {
      console.log('Notification unhovered');
    }
  }

  handleArrowClick() {
    this.router.navigate(['']);
  }
  handleUserClick() {
    this.router.navigate(['profile']);
  }
  handleGroup60Click() {
    this.router.navigate(['settings']);
  }
  handleGroup59Click() {
    this.router.navigate(['profile']);
  }
  handleGroup58Click() {
    this.router.navigate(['mcq'])
  }
  handleGroup56Click() {
    this.router.navigate(['courses']);
  }
  handleGroup57Click() {
    this.router.navigate(['videos'])
  }
  handleGroup25Click() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroup7Click() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupJ1Click() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupA1Click() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupCClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupDClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupP1Click() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupZ1Click() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupWClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupAClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupGClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupNClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupHClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupZClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupJClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupXClick() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupClick() {
    throw new Error('Method not implemented.');
  }
  handleGroup27Click() {
    throw new Error('Method not implemented.');
  }
  handleAutoGroupPClick() {
    throw new Error('Method not implemented.');
  }
  handleGroupClick() {
    throw new Error('Method not implemented.');
  }
  handleRectangleClick() {
    console.log('Rectangle clicked');
  }
  handleAutoGroupQClick() {
    this.router.navigate(['profile']);
  }

  handleSearchClick() {
    console.log('Search clicked');
  }
}
