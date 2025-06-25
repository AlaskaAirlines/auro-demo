

<script>
import BackgroundContainer from "$lib/components/BackgroundContainer.svelte";

import "@aurodesignsystem/auro-header";
import "@aurodesignsystem/auro-button";
import "@aurodesignsystem/auro-icon";
import { AuroCombobox } from "@aurodesignsystem/auro-formkit/auro-combobox/class";
import {
	AuroCounter,
	AuroCounterGroup,
} from "@aurodesignsystem/auro-formkit/auro-counter/class";
import { AuroDatePicker } from "@aurodesignsystem/auro-formkit/auro-datepicker/class";
import { AuroDropdown } from "@aurodesignsystem/auro-formkit/auro-dropdown/class";
import { AuroInput } from "@aurodesignsystem/auro-formkit/auro-input/class";
import "@aurodesignsystem/auro-formkit/auro-checkbox";
import "@aurodesignsystem/auro-formkit/auro-radio";
import {
	AuroMenu,
	AuroMenuOption,
} from "@aurodesignsystem/auro-formkit/auro-menu/class";
import { AuroSelect } from "@aurodesignsystem/auro-formkit/auro-select/class";

AuroCounter.register("auro-counter-dev");
AuroCounterGroup.register("auro-counter-group-dev");
AuroDatePicker.register("auro-datepicker-dev");
AuroDropdown.register("auro-dropdown-dev");
AuroSelect.register("auro-select-dev");
AuroInput.register("auro-input-dev");
AuroCombobox.register("auro-combobox-dev");
AuroMenu.register("auro-menu-dev");
AuroMenuOption.register("auro-menuoption-dev");

<div class="space-y-8">
	
	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Button</auro-header>
	<BackgroundContainer showBoth >
		<auro-button ondark={true} shape="pill">Pill</auro-button>
		<auro-button ondark={true} shape="rounded">Rounded</auro-button>
		<auro-button ondark={true} shape="circle">
			<auro-icon customcolor category="interface" name="account-filled"></auro-icon>
		</auro-button>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Checkbox</auro-header>
	<BackgroundContainer showBoth >
		<auro-checkbox-group>
			<span slot="legend">Form label goes here</span>
			<auro-checkbox ondark={true} value="value1" name="basic" id="checkbox-basic1">Checkbox option</auro-checkbox>
			<auro-checkbox ondark={true} value="value2" name="basic" id="checkbox-basic2" checked>Checkbox option</auro-checkbox>
			<auro-checkbox ondark={true} value="value3" name="basic" id="checkbox-basic3">Checkbox option that has some extra text that should wrap when rendered in a narrow container</auro-checkbox>
			<auro-checkbox ondark={true} value="value4" name="basic" id="checkbox-basic4">Checkbox option</auro-checkbox>
		</auro-checkbox-group>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Radio</auro-header>
	<BackgroundContainer showBoth >
		<auro-radio-group ondark={true} validity="valid">
			<span slot="legend">Form label goes here</span>
			<auro-radio ondark={true} id="basicGroupRadio1" label="Yes" name="radioDemo" value="yes" tabindex="0" checked=""></auro-radio>
			<auro-radio ondark={true} id="basicGroupRadio2" label="No" name="radioDemo" value="no" tabindex="-1"></auro-radio>
			<auro-radio ondark={true} id="basicGroupRadio3" label="Maybe" name="radioDemo" value="maybe" tabindex="-1"></auro-radio>
		</auro-radio-group>
	</BackgroundContainer>

	<auro-header level="3" display="700" margin="both" size="none" color="var(--ds-basic-color-brand-primary)">Datepicker</auro-header>
	<p class="text-(--ds-advanced-color-button-flat-text) text-sm">(only ondark available)</p>
	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer background="dark" class="flex flex-row gap-4">
		<auro-datepicker-dev ondark={true} style="width: 306px" layout="snowflake" shape="snowflake" placeholder="MM/DD">
			<span slot="bib.fullscreen.headline">Datepicker Headline</span>
			<span slot="fromLabel">Choose a date</span>
			<span slot="bib.fullscreen.dateLabel">Choose a date</span>
		</auro-datepicker-dev>

		<auro-datepicker-dev ondark={true} range style="width: 400px" layout="snowflake" shape="snowflake" placeholder="MM/DD">
			<span slot="bib.fullscreen.headline">Datepicker Headline</span>
			<span slot="fromLabel">Choose a date</span>
			<span slot="bib.fullscreen.dateLabel">Choose a date</span>
		</auro-datepicker-dev>

	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Counter</auro-header>
	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth>
		<auro-counter-group-dev ondark={true} isDropdown layout="snowflake">
			<div slot="bib.fullscreen.headline">Passengers</div>
			<div slot="label">Passengers</div>
			<auro-counter-dev>
				Adults
				<span slot="description">18 years or older</span>
			</auro-counter-dev>
			<auro-counter-dev>
				Children
				<span slot="description">2-17 years</span>
			</auro-counter-dev>
		</auro-counter-group-dev>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Dropdown</auro-header>
	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth >
		<auro-dropdown-dev ondark={true} aria-label="custom label" shape="snowflake" size="lg" layout="snowflake" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
				Trigger
			</div>
		</auro-dropdown-dev>

	</BackgroundContainer>

	<auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-dropdown-dev ondark={true} aria-label="custom label" shape="pill" size="xl" layout="emphasized" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
			Trigger
			</div>
		</auro-dropdown-dev>

		<auro-dropdown-dev ondark={true} aria-label="custom label" shape="pill-left" size="xl" layout="emphasized" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
			Trigger
			</div>
		</auro-dropdown-dev>

		<auro-dropdown-dev ondark={true} aria-label="custom label" shape="pill-right" size="xl" layout="emphasized" style="width: 249px;">
			<div class="p-5">
				<auro-header level="5" display="300">
					Lorem ipsum solar
				</auro-header>
			</div>
			<div slot="trigger">
			Trigger
			</div>
		</auro-dropdown-dev>
	</BackgroundContainer>

	<auro-header level="3" display="700" color="var(--ds-basic-color-brand-primary)">Select</auro-header>
	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-select-dev ondark={true} layout="snowflake" shape="snowflake" value="flights" forceDisplayValue style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu-dev nocheckmark>
				<auro-menuoption-dev value="flights">
					<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cars">
					<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="hotels">
					<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="packages">
					<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cruises">
					<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
				</auro-menuoption-dev>
			</auro-menu-dev>
		</auro-select-dev>

		<auro-select-dev ondark={true} layout="snowflake" shape="snowflake" value="flights" style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu-dev nocheckmark>
				<auro-menuoption-dev value="flights">
					<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cars">
					<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="hotels">
					<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="packages">
					<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cruises">
					<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
				</auro-menuoption-dev>
			</auro-menu-dev>
		</auro-select-dev>

		<auro-select-dev ondark={true} layout="snowflake" shape="snowflake" value="flights" required style="display:inline-block;">
			<span slot="label">Select Example</span>
			<span slot="helptext">no displayValue in menuoptions</span>
			<auro-menu-dev nocheckmark>
				<auro-menuoption-dev value="flights">
					<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cars">
					<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
				</auro-menuoption-dev>
				<auro-menuoption-dev value="hotels">
					<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
				</auro-menuoption-dev>
				<auro-menuoption-dev value="packages">
					<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cruises">
					<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
				</auro-menuoption-dev>
			</auro-menu-dev>
		</auro-select-dev>
	</BackgroundContainer>

	<auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer showBoth class="flex flex-row gap-4">
		<auro-select-dev ondark={true} layout="emphasized" shape="pill" size="xl" value="flights" forceDisplayValue style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu-dev nocheckmark>
			<auro-menuoption-dev value="flights">
				<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
			</auro-menuoption-dev>
			<auro-menuoption-dev value="cars">
				<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
			</auro-menuoption-dev>
			<auro-menuoption-dev value="hotels">
				<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
			</auro-menuoption-dev>
			<auro-menuoption-dev value="packages">
				<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
			</auro-menuoption-dev>
			<auro-menuoption-dev value="cruises">
				<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
				<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
			</auro-menuoption-dev>
			</auro-menu-dev>
		</auro-select-dev>

		<auro-select-dev ondark={true} layout="emphasized" shape="pill" size="xl" value="flights" style="display:inline-block;">
			<span slot="label">Select Example</span>
			<auro-menu-dev nocheckmark>
				<auro-menuoption-dev value="flights">
					<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="terminal" name="plane-diag-fill" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cars">
					<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="car-rental-stroke" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="hotels">
					<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="destination" name="hotel-filled" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="packages">
					<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="shop" name="gift-filled" customcolor></auro-icon>
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cruises">
					<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
					<auro-icon style="--ds-auro-icon-size: 40px;" slot="displayValue" category="in-flight" name="boarding" customcolor></auro-icon>
				</auro-menuoption-dev>
			</auro-menu-dev>
		</auro-select-dev>

		<auro-select-dev ondark={true} layout="emphasized" shape="pill" size="xl" value="flights" required style="display:inline-block;">
			<span slot="label">Select Example</span>
			<span slot="helptext">no displayValue in menuoptions</span>
			<auro-menu-dev nocheckmark>
				<auro-menuoption-dev value="flights">
					<auro-icon category="terminal" name="plane-diag-stroke" customcolor></auro-icon> Flights
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cars">
					<auro-icon category="destination" name="car-rental-stroke" customcolor></auro-icon> Cars
				</auro-menuoption-dev>
				<auro-menuoption-dev value="hotels">
					<auro-icon category="destination" name="hotel-stroke" customcolor></auro-icon> Hotels
				</auro-menuoption-dev>
				<auro-menuoption-dev value="packages">
					<auro-icon category="shop" name="gift-stroke" customcolor></auro-icon> Packages
				</auro-menuoption-dev>
				<auro-menuoption-dev value="cruises">
					<auro-icon category="in-flight" name="boarding" customcolor></auro-icon> Cruises
				</auro-menuoption-dev>
			</auro-menu-dev>
		</auro-select-dev>
	</BackgroundContainer>

	<auro-header level="3" display="700" margin="both" size="none" color="var(--ds-basic-color-brand-primary)">Combobox</auro-header>
	<p class="text-(--ds-advanced-color-button-flat-text) text-sm">(only ondark available)</p>
	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer background="dark" class="flex flex-row gap-4">
	<auro-combobox-dev ondark={true} layout="emphasized" shape="pill" size="xl" placeholder="Placeholder content" required style="width: 249px;">
      <span slot="bib.fullscreen.headline">Bib Header</span>
      <span slot="label">Name</span>
      <auro-menu-dev>
        <auro-menuoption-dev value="Apples" id="option-0">Apples</auro-menuoption-dev>
        <auro-menuoption-dev value="Oranges" id="option-1">Oranges</auro-menuoption-dev>
        <auro-menuoption-dev value="Peaches" id="option-2">Peaches</auro-menuoption-dev>
        <auro-menuoption-dev value="Grapes" id="option-3">Grapes</auro-menuoption-dev>
        <auro-menuoption-dev value="Cherries" id="option-4">Cherries</auro-menuoption-dev>
        <auro-menuoption-dev static nomatch>No matching option</auro-menuoption-dev>
      </auro-menu-dev>
      <span slot="helpText">
        Help text - Lorem ipsum solar lorem ipsum solar
      </span>
      <span slot="displayValue">
        <div>
          <div class="mainText">Apples</div>
          <div class="subText">Fruit</div>
        </div>
      </span>
    </auro-combobox-dev>

    <auro-combobox-dev ondark={true} layout="emphasized" shape="pill-left" size="xl" placeholder="Placeholder content" required style="width: 249px;">
      <span slot="bib.fullscreen.headline">Bib Header</span>
      <span slot="label">Name</span>
      <auro-menu-dev>
        <auro-menuoption-dev value="Apples" id="option-0">Apples</auro-menuoption-dev>
        <auro-menuoption-dev value="Oranges" id="option-1">Oranges</auro-menuoption-dev>
        <auro-menuoption-dev value="Peaches" id="option-2">Peaches</auro-menuoption-dev>
        <auro-menuoption-dev value="Grapes" id="option-3">Grapes</auro-menuoption-dev>
        <auro-menuoption-dev value="Cherries" id="option-4">Cherries</auro-menuoption-dev>
        <auro-menuoption-dev static nomatch>No matching option</auro-menuoption-dev>
      </auro-menu-dev>
      <span slot="helpText">
        Help text - Lorem ipsum solar lorem ipsum solar
      </span>
    </auro-combobox-dev>

    <auro-combobox-dev ondark={true} layout="emphasized" shape="pill-right" size="xl" placeholder="Placeholder content" required style="width: 249px;">
      <span slot="bib.fullscreen.headline">Bib Header</span>
      <span slot="label">Name</span>
      <auro-menu-dev>
        <auro-menuoption-dev value="Apples" id="option-0">Apples</auro-menuoption-dev>
        <auro-menuoption-dev value="Oranges" id="option-1">Oranges</auro-menuoption-dev>
        <auro-menuoption-dev value="Peaches" id="option-2">Peaches</auro-menuoption-dev>
        <auro-menuoption-dev value="Grapes" id="option-3">Grapes</auro-menuoption-dev>
        <auro-menuoption-dev value="Cherries" id="option-4">Cherries</auro-menuoption-dev>
        <auro-menuoption-dev static nomatch>No matching option</auro-menuoption-dev>
      </auro-menu-dev>
      <span slot="helpText">
        Help text - Lorem ipsum solar lorem ipsum solar
      </span>
    </auro-combobox-dev>
	</BackgroundContainer>

  <auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer background="dark" class="flex flex-row gap-4">
		<auro-combobox-dev ondark={true} layout="emphasized" shape="pill" size="xl" placeholder="Placeholder content" required style="width: 249px;">
			<span slot="bib.fullscreen.headline">Bib Header</span>
			<span slot="label">Name</span>
			<auro-menu-dev>
				<auro-menuoption-dev value="Apples" id="option-0">Apples</auro-menuoption-dev>
				<auro-menuoption-dev value="Oranges" id="option-1">Oranges</auro-menuoption-dev>
				<auro-menuoption-dev value="Peaches" id="option-2">Peaches</auro-menuoption-dev>
				<auro-menuoption-dev value="Grapes" id="option-3">Grapes</auro-menuoption-dev>
				<auro-menuoption-dev value="Cherries" id="option-4">Cherries</auro-menuoption-dev>
				<auro-menuoption-dev static nomatch>No matching option</auro-menuoption-dev>
			</auro-menu-dev>
			<span slot="helpText">
				Help text - Lorem ipsum solar lorem ipsum solar
			</span>
		</auro-combobox-dev>

		<auro-combobox-dev ondark={true} layout="emphasized" shape="pill-left" size="xl" placeholder="Placeholder content" required style="width: 249px;">
			<span slot="bib.fullscreen.headline">Bib Header</span>
			<span slot="label">Name</span>
			<auro-menu-dev>
				<auro-menuoption-dev value="Apples" id="option-0">Apples</auro-menuoption-dev>
				<auro-menuoption-dev value="Oranges" id="option-1">Oranges</auro-menuoption-dev>
				<auro-menuoption-dev value="Peaches" id="option-2">Peaches</auro-menuoption-dev>
				<auro-menuoption-dev value="Grapes" id="option-3">Grapes</auro-menuoption-dev>
				<auro-menuoption-dev value="Cherries" id="option-4">Cherries</auro-menuoption-dev>
				<auro-menuoption-dev static nomatch>No matching option</auro-menuoption-dev>
			</auro-menu-dev>
			<span slot="helpText">
				Help text - Lorem ipsum solar lorem ipsum solar
			</span>
		</auro-combobox-dev>

		<auro-combobox-dev ondark={true} layout="emphasized" shape="pill-right" size="xl" placeholder="Placeholder content" required style="width: 249px;">
			<span slot="bib.fullscreen.headline">Bib Header</span>
			<span slot="label">Name</span>
			<auro-menu-dev>
				<auro-menuoption-dev value="Apples" id="option-0">Apples</auro-menuoption-dev>
				<auro-menuoption-dev value="Oranges" id="option-1">Oranges</auro-menuoption-dev>
				<auro-menuoption-dev value="Peaches" id="option-2">Peaches</auro-menuoption-dev>
				<auro-menuoption-dev value="Grapes" id="option-3">Grapes</auro-menuoption-dev>
				<auro-menuoption-dev value="Cherries" id="option-4">Cherries</auro-menuoption-dev>
				<auro-menuoption-dev static nomatch>No matching option</auro-menuoption-dev>
			</auro-menu-dev>
			<span slot="helpText">
				Help text - Lorem ipsum solar lorem ipsum solar
			</span>
		</auro-combobox-dev>
	</BackgroundContainer>

	<auro-header level="3" display="700" margin="both" size="none" color="var(--ds-basic-color-brand-primary)">Input</auro-header>
	<p class="text-(--ds-advanced-color-button-flat-text) text-sm">(only ondark available)</p>
	<auro-header level="5" display="300">Snowflake</auro-header>
	<BackgroundContainer background="dark">
		<auro-input-dev ondark={true} id="snowflakePill" layout="snowflake" shape="snowflake" size="lg" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
		</auro-input-dev>

	</BackgroundContainer>

	<auro-header level="5" display="300">Emphasized</auro-header>
	<BackgroundContainer background="dark" class="flex flex-row gap-4">
		<auro-input-dev ondark={true} id="alpha" value="lax" layout="emphasized" shape="box" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
			<span slot="displayValue">
				<div>
				<div class="mainText">LAX</div>
				<div class="subText">Los Angeles</div>
				</div>
			</span>
		</auro-input-dev>

		<auro-input-dev ondark={true} id="beta" layout="emphasized" shape="pill" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
			</auro-input-dev>

			<auro-input-dev id="charlie" layout="emphasized-left" shape="pill-left" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
		</auro-input-dev>

		<auro-input-dev ondark={true} id="delta" layout="emphasized-right" shape="pill-right" size="xl" placeholder="Departure" style="width: 249px;" required>
			<label slot="label">From</label>
			<span slot="helptext">Example help text</span>
		</auro-input-dev>
	</BackgroundContainer>

</div>

<style lang="scss">

</style>
