<script>
    import utils from '../utils/auth-utils.js';
    
    export let title = "Claim your Learner Badge here !"
    export let type = "learner";

    let qrUrl = `${utils.API}/get-badge?type=${type}&what=qr`;
    let badgerUrl = `${utils.API}/get-badge?type=${type}&what=badger`;

    export let props = {
      title,
      qrUrl,
      badgerUrl
    };
</script>


<style>
  .img-badger, .img-qrcode {
    width: 256px;

  }
</style>


<!-- Start: Card Info -->
<div class="card shadow border-left-success py-2 h-100">
  <div class="card-body">
    <div class="row align-items-center no-gutters">
      <div class="col mr-2">
        <div class="text-uppercase text-info font-weight-bold text-xs mb-1">
          <span>{props.title}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 h-100">
        <p>&nbsp;</p>
        <div>
            <img class="img img-fluid img-qrcode" src="{props.badgerUrl}" alt="" />
        </div>
      </div>
      <div class="col-6 h-100">
        <p>&nbsp;</p>
        <div>
            <img class="img img-fluid img-qrcode" src="{props.qrUrl}" alt="" />
        </div>
      </div>

    </div>
  </div>
</div>
<!-- End: Card Info -->
