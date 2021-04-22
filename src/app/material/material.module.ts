import { NgModule } from '@angular/core';
import { MatIconModule, MatDialogModule, MatButtonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatSelectModule, MatCheckboxModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';

const MaterialComponents = [
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule
]

@NgModule({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
        })
        
export class MaterialModule {}