<?php
    $dataFile      = 'example.csv';
    $uid           = uniqid();
    $attributeName = "data-{$uid}";
    $classInstance = "Table{$uid}";

    header('Content-Type: text/html');
    print <<<END
<div class="card px-3 py-4 shadow-sm">
    <!-- Custom styles -->
    <style>
    #main-copy .form-search {
        border-bottom: 2px solid #0a0a0a;
    }
    #main-copy  .form-search input:not(.btn){  
        background: #fff;
        border: none;
        box-shadow: none;
        font-family: "Roboto Condensed",helvetica,arial,sans-serif;
        font-weight: 700;
        font-size: 1.4rem;
    }
    </style>
    <!-- Reuseable templates -->
    <template {$attributeName}="rowTemplate">
        <tr></tr>
    </template>
    <template {$attributeName}="itemTemplate">
        <td></td>
    </template>
    <template {$attributeName}="colTemplate">
        <th scope="col" class="align-middle" style="cursor:pointer" tabindex="0">
            <div class="d-flex align-items-center">
                <span role="columnheader"></span>
                <i class="bi bi-caret-up ms-2"></i>
                <i class="bi bi-caret-down ms-n1"></i>
            </div>
        </th>
    </template>
    <template {$attributeName}="paginationTemplate">
        <li class="page-item">
            <a role="button" class="page-link" style="margin-left: -1px; border-radius: 0;" tabindex="0">
                <span></span>
            </a>
        </li>
    </template>
    <!-- Top Navigation -->
	<div class="row justify-content-center">
		<div class="col-sm-10 mb-3">
			<form id="yourid" class="form-search">
				<div class="d-flex align-items-center">
					<label for="search-main" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1792" style="height: 36px;width: 36px;" viewBox="0 0 1792 1792" width="1792">
							<path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path>
						</svg>
					</label>
					<div class="d-flex flex-grow-1 mx-2">
						<input autofocus="" class="form-control py-3" dir="auto" id="search-main" name="search-main" placeholder="search" title="Search" type="text" oninput="{$classInstance}.search(event);">
					</div>
                    <div>
                        <input class="btn btn-primary" onclick="location.reload();" type="button" value="reset/view all">
                    </div>
				</div>
			</form>
		</div>
	</div>
    <!-- Table -->
    <div class="table-responsive my-4">
        <table class="table table-bordered table-striped align-middle my-4">
            <thead {$attributeName}="thead"></thead>
            <tbody {$attributeName}="tbody"></tbody>
        </table>
    </div>
    <!-- Bottom navigation -->
    <div class="d-lg-flex flex-wrap align-items-center justify-content-between">
        <div class="d-flex order-2 align-items-center justify-content-center mb-4">
            <p class="border-end pe-3 m-0 me-3" {$attributeName}="entries"></p>
            <label for="itemsPerPage" class="form-label text-end m-0 me-2">results per page</label>
            <select name="itemsPerPage" class="form-select form-select-sm py-2" aria-label=".form-select-sm example" onchange="{$classInstance}.page.reload(event);">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="-1">All</option>
            </select>
        </div>
        <nav class="order-1" role="navigation" aria-label="Pagination Navigation">
            <ul class="pagination d-flex flex-nowrap justify-content-center ps-0 mb-4" {$attributeName}="pagination"></ul>
        </nav>
    </div>
    <script src="ts-tables.js"></script>
    <script>
        const {$classInstance} = new tables.Table(10, '{$attributeName}', '{$classInstance}', 1);
        // Provide the source JSON file or PHP url that returns JSON
        {$classInstance}.init('{$dataFile}');
    </script>
</div>
END;
