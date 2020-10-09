<script>
    export let icon = "fa-map-marker-alt" // fa-route fa-receipt fa-shopping-cart
    export let border = "info" // success info ...
    export let smallTitle = "Azure Heroes"
    export let bigTitle = "Claim your Builder Badge here !"
    export let links = undefined;

    export let props = {
      icon,
      border,
      smallTitle,
      bigTitle,
      links
    };
</script>




<!-- Start: Card Info -->
<div class="card shadow border-left-success py-2 h-100">
  <div class="card-body">
    <div class="row align-items-center no-gutters">
      <div class="col mr-2">
        <div class="text-uppercase text-info font-weight-bold text-xs mb-1">
          <span>{props.smallTitle}</span>
        </div>
        <div class="row no-gutters align-items-center">
          <div class="col-auto">
            <div class="text-dark font-weight-bold h5 mb-0 mr-3">
              <span>{props.bigTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 h-100">
        <p>&nbsp;</p>
        <div>
            <img class="img img-fluid" src="/api/get-badge" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End: Card Info -->
