

<script>
import BackgroundContainer from "$lib/components/BackgroundContainer.svelte";

import "@aurodesignsystem/auro-header";
import "@aurodesignsystem/auro-button";
import "@aurodesignsystem/auro-icon";
import "@aurodesignsystem-dev/auro-formkit/auro-counter";
import "@aurodesignsystem-dev/auro-formkit/auro-datepicker";
import "@aurodesignsystem-dev/auro-formkit/auro-dropdown";
import "@aurodesignsystem-dev/auro-formkit/auro-select";
import "@aurodesignsystem-dev/auro-formkit/auro-input";
import "@aurodesignsystem-dev/auro-formkit/auro-combobox";
import "@aurodesignsystem-dev/auro-formkit/auro-menu";
</script>  

<div class="space-y-8">
	
	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Button</auro-header>
	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth >
		<auro-button layout="snowflake" shape="pill">Pill</auro-button>
		<auro-button layout="snowflake" shape="rounded">Rounded</auro-button>
		<auro-button layout="snowflake" shape="circle">
			<auro-icon customcolor category="interface" name="account-filled"></auro-icon>
		</auro-button>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Datepicker</auro-header>
	<auro-header level="5" display="300">Snowflake (only available)</auro-header>
	<BackgroundContainer background="dark" >
		<auro-datepicker style="width: 306px" layout="snowflake" shape="snowflake" placeholder="MM/DD">
			<span slot="bib.fullscreen.headline">Datepicker Headline</span>
			<span slot="fromLabel">Choose a date</span>
			<span slot="bib.fullscreen.dateLabel">Choose a date</span>
		</auro-datepicker>

		<auro-datepicker disabled="" range style="width: 306px" layout="snowflake" shape="snowflake" placeholder="MM/DD">
			<span slot="bib.fullscreen.headline">Datepicker Headline</span>
			<span slot="fromLabel">Choose a date</span>
			<span slot="bib.fullscreen.dateLabel">Choose a date</span>
		</auro-datepicker>

	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Counter</auro-header>

	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth >
		<auro-counter-group max="10" min="2" isDropdown layout="snowflake" shape="snowflake" size="lg">
			<div slot="bib.fullscreen.headline">Group fullscreen label</div>
			<div slot="label">Snowflake Dropdown Group</div>
			<div slot="helpText">Total must be between 2-10</div>
			
			<auro-counter>
				Counter 1
			</auro-counter>
			<auro-counter>
				Counter 2
			</auro-counter>
		</auro-counter-group>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Dropdown</auro-header>

	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth >
		<auro-dropdown aria-label="custom label" shape="snowflake" size="lg" layout="snowflake" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
				Trigger
			</div>
		</auro-dropdown>

	</BackgroundContainer>

	<auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-dropdown aria-label="custom label" shape="pill" size="xl" layout="emphasized" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
			Trigger
			</div>
		</auro-dropdown>

		<auro-dropdown aria-label="custom label" shape="pill-left" size="xl" layout="emphasized" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
			Trigger
			</div>
		</auro-dropdown>

		<auro-dropdown aria-label="custom label" shape="pill-right" size="xl" layout="emphasized" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
			Trigger
			</div>
		</auro-dropdown>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Select</auro-header>

	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-select layout="snowflake" shape="snowflake" value="flights" forceDisplayValue style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu nocheckmark>
			<auro-menuoption value="flights">
				<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cars">
				<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="hotels">
				<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="packages">
				<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cruises">
				<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
			</auro-menuoption>
			</auro-menu>
		</auro-select>

		<auro-select layout="snowflake" shape="snowflake" value="flights" style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu nocheckmark>
			<auro-menuoption value="flights">
				<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cars">
				<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="hotels">
				<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="packages">
				<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cruises">
				<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
			</auro-menuoption>
			</auro-menu>
		</auro-select>

		<auro-select layout="snowflake" shape="snowflake" value="flights" required style="display:inline-block;">
			<span slot="label">Select Example</span>
			<span slot="helptext">no displayValue in menuoptions</span>
			<auro-menu nocheckmark>
			<auro-menuoption value="flights">
				<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
			</auro-menuoption>
			<auro-menuoption value="cars">
				<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
			</auro-menuoption>
			<auro-menuoption value="hotels">
				<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
			</auro-menuoption>
			<auro-menuoption value="packages">
				<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
			</auro-menuoption>
			<auro-menuoption value="cruises">
				<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
			</auro-menuoption>
			</auro-menu>
		</auro-select>
	</BackgroundContainer>

	<auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-select layout="emphasized" shape="pill" size="xl" value="flights" forceDisplayValue style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu nocheckmark>
			<auro-menuoption value="flights">
				<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cars">
				<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="hotels">
				<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="packages">
				<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cruises">
				<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
			</auro-menuoption>
			</auro-menu>
		</auro-select>

		<auro-select layout="emphasized" shape="pill" size="xl" value="flights" style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu nocheckmark>
			<auro-menuoption value="flights">
				<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cars">
				<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="hotels">
				<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="packages">
				<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
			</auro-menuoption>
			<auro-menuoption value="cruises">
				<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
			</auro-menuoption>
			</auro-menu>
		</auro-select>

		<auro-select layout="emphasized" shape="pill" size="xl" value="flights" required style="display:inline-block;">
			<span slot="label">Select Example</span>
			<span slot="helptext">no displayValue in menuoptions</span>
			<auro-menu nocheckmark>
			<auro-menuoption value="flights">
				<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
			</auro-menuoption>
			<auro-menuoption value="cars">
				<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
			</auro-menuoption>
			<auro-menuoption value="hotels">
				<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
			</auro-menuoption>
			<auro-menuoption value="packages">
				<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
			</auro-menuoption>
			<auro-menuoption value="cruises">
				<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
			</auro-menuoption>
			</auro-menu>
		</auro-select>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Combobox</auro-header>

	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth>
		<auro-combobox layout="snowflake" shape="snowflake" size="lg" placeholder="Placeholder content" required style="width: 249px;">
			<span slot="bib.fullscreen.headline">Bib Header</span>
			<span slot="label">Name</span>
			<auro-menu>
				<auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
				<auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
				<auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
				<auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
				<auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
				<auro-menuoption static nomatch>No matching option</auro-menuoption>
			</auro-menu>
			<span slot="helpText">
				Help text - Lorem ipsum solar lorem ipsum solar
			</span>
		</auro-combobox>
	</BackgroundContainer>

	<auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-combobox layout="emphasized" shape="pill" size="xl" placeholder="Placeholder content" required style="width: 249px;">
			<span slot="bib.fullscreen.headline">Bib Header</span>
			<span slot="label">Name</span>
			<auro-menu>
				<auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
				<auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
				<auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
				<auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
				<auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
				<auro-menuoption static nomatch>No matching option</auro-menuoption>
			</auro-menu>
			<span slot="helpText">
				Help text - Lorem ipsum solar lorem ipsum solar
			</span>
		</auro-combobox>

		<auro-combobox layout="emphasized" shape="pill-left" size="xl" placeholder="Placeholder content" required style="width: 249px;">
			<span slot="bib.fullscreen.headline">Bib Header</span>
			<span slot="label">Name</span>
			<auro-menu>
				<auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
				<auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
				<auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
				<auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
				<auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
				<auro-menuoption static nomatch>No matching option</auro-menuoption>
			</auro-menu>
			<span slot="helpText">
				Help text - Lorem ipsum solar lorem ipsum solar
			</span>
		</auro-combobox>

		<auro-combobox layout="emphasized" shape="pill-right" size="xl" placeholder="Placeholder content" required style="width: 249px;">
			<span slot="bib.fullscreen.headline">Bib Header</span>
			<span slot="label">Name</span>
			<auro-menu>
				<auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
				<auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
				<auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
				<auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
				<auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
				<auro-menuoption static nomatch>No matching option</auro-menuoption>
			</auro-menu>
			<span slot="helpText">
				Help text - Lorem ipsum solar lorem ipsum solar
			</span>
		</auro-combobox>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Input</auro-header>

	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth>
		<auro-input id="snowflakePill" layout="snowflake" shape="snowflake" size="lg" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
		</auro-input>
 
	</BackgroundContainer>

	<auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-input id="alpha" value="lax" layout="emphasized" shape="box" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
			<span slot="displayValue">
				<div>
				<div class="mainText">LAX</div>
				<div class="subText">Los Angeles</div>
				</div>
			</span>
		</auro-input>

		<auro-input id="beta" layout="emphasized" shape="pill" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
			</auro-input>

			<auro-input id="charlie" layout="emphasized-left" shape="pill-left" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
		</auro-input>

		<auro-input id="delta" layout="emphasized-right" shape="pill-right" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
		</auro-input>
	</BackgroundContainer>

</div>

<style lang="scss">

</style>
