<script lang="ts">
import "@aurodesignsystem/auro-header";
import "@aurodesignsystem/auro-button";
import { base } from "$app/paths";
</script>

<div class="space-y-8">
  <div class="text-center">
    <auro-header level="2" display="display" color="var(--ds-basic-color-brand-primary)">Auro Demo!</auro-header>
    <auro-header level="4" display="300" margin="both" size="none" color="var(--ds-basic-color-texticon-default)">A simple site for demonstrating Auro components and themes.</auro-header>
  </div>
  
  <div class="flex justify-center mt-8">
    <a href="{base}/demos" class="inline-block">
      <auro-button>Browse Component Demos</auro-button>
    </a>
  </div>
  
</div>
