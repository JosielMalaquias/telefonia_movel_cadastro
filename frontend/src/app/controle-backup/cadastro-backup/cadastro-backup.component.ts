import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-cadastro-backup',
  templateUrl: './cadastro-backup.component.html',
  styleUrls: ['./cadastro-backup.component.css']
})
export class CadastroBackupComponent implements OnInit {

  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};

  ngOnInit(): void {

    $('#reservation').daterangepicker()
        //Initialize Select2 Elements
        $('.select2').select2()
        //Initialize Select2 Elements
        $('.select2bs4').select2({
          theme: 'bootstrap4'
        })
        $('[data-mask]').inputmask()
        
    this.dtOptions = {
      //ajax: 'data/data.json',
      columns: [{
        title: 'ID'
      },{
        title: 'Unidade'
      },      {
        title: 'Modelo'
      },      {
        title: 'Imei'
      }],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        {
          extend: 'colvis',
          text: '<i class="fas fa-scroll"></i> colvis'
        },
        {
          extend: 'copy',
          text: '<i class="fas fa-copy"></i> copy'
        },
        {
          extend: 'print',
          text: '<i class="fas fa-print"></i> print'
        },
        {
          extend: 'excel',
          text: '<i class="fas fa-file-excel"></i> excel'
        },
        {
          text: '<i class="fas fa-sync"></i> Refresh',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ]
    };
  }


}
