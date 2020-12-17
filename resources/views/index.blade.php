<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Everlast Energy Portal</title>
    <meta name="description" content="Affiliate Portal" />
    
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <link rel="canonical" href="https://portal.everlastenergy.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Everlast Energy Admin Portal" />
    <meta property="og:description" content="Everlast Energy improves client's energy bills, fast.  Guaranteed" />
    <meta property="og:url" content="https://portal.everlastenergy.com" />
    <meta property="og:site_name" content="Everlast Energy" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="Everlast Energy improves client's credit, fast.  Guaranteed" />
    <meta name="twitter:title" content="Everlast Energy Admin Portal" />
    <meta name="google-site-verification" content="{google_site_verification}" />
    <link rel="shortlink" href="https://portal.everlastenergy.com" />
    <meta name="twitter:image" content="https://portal.everlastenergy.com/everlast_profile_img_transparent.png" />
    <meta property="og:image" content="https://portal.everlastenergy.com/everlast_profile_img_transparent.png" />
    <meta property="og:image:url" content="https://portal.everlastenergy.com/everlast_profile_img_transparent.png" />
    <meta property="og:image:secure_url" content="https://portal.everlastenergy.com/everlast_profile_img_transparent.png" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="robots" content="index,follow"/>
    <meta name="author" content="Holliday Cursive Media">
    <meta name="theme-color" content="#0078ff">
        <!-- Toggles CSS -->
        <link href="{{ asset('vendors/jquery-toggles/css/toggles.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('vendors/jquery-toggles/css/themes/toggles-light.css')}}" rel="stylesheet" type="text/css">

        <!-- Custom CSS -->
        <link href="{{ asset('assets/css/style.css')}}" rel="stylesheet" type="text/css">
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-71683338-2"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-71683338-2');
        </script>
                <link href="{{ asset('assets/fontawesome-free-5.13.0-web/css/all.css')}}" rel="stylesheet" type="text/css">
    	
    	<!-- Morris Charts CSS -->
        <link href="{{ asset('vendors/morris.js/morris.css')}}" rel="stylesheet" type="text/css" />
    	
        <!-- Toggles CSS -->
        <link href="{{ asset('vendors/jquery-toggles/css/toggles.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('vendors/jquery-toggles/css/themes/toggles-light.css')}}" rel="stylesheet" type="text/css">
        
        <!-- Tablesaw table CSS -->
        <link href="{{ asset('vendors/tablesaw/dist/tablesaw.css')}}" rel="stylesheet" type="text/css" />
    	
    	<!-- Data Table CSS -->
        <link href="{{ asset('vendors/datatables.net-dt/css/jquery.dataTables.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('vendors/datatables.net-responsive-dt/css/responsive.dataTables.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('vendors/datatables.net-editor-dt/css/editor.bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
        <!-- Custom CSS -->
        <link href="{{ asset('assets/css/style.min.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/custom_admin.css')}}" rel="stylesheet" type="text/css">
    
        <style>
            .hk-wrapper{
                min-height: 100vh;
            }
            .hk-sec-wrapper{
                margin-bottom: 20px !important;
            }
            #pen_app_den_affiliates_leads{
                float: right;
            }
            .modal.fade.show{
                padding: 0 !important;
            }
            input#YesterdaySale, input#YesterdayGoal{
                font-size:35px;
            }
            .fm-body{
                height: 100% !important;
            }
            .dataTables_wrapper{
                overflow-x: hidden !important; 
            }
            .dataTables_wrapper .row:first-child col-sm-12:first-child{
                width: auto !important;
                flex: none !important;
            }
            .dataTables_filter label{
                display: flex;
            }
            @media screen and (max-width:768px){
                .dataTables_wrapper .row:first-child {
                    display: flow-root !important;
                }
                #datable_1_filter, #datable_1_length, .dataTables_length, .dataTables_filter{
                    float: left !important;
                    flex: none;
                }
                .dataTables_filter{
                    margin-left: 5px;
                    margin-top: 0 !important;
                }
                #pen_app_den_affiliates_leads{ 
                    float: left !important;
                }
                
                .modal-dialog {
                    max-width: 90% !important;
                    width: 90% !important;
                }
                input#YesterdaySale, input#YesterdayGoal{
                    font-size:18px;
                }
            }
            
        
        </style>
        
    </head>
    <body>
        <!-- Preloader -->
        <div class="preloader-it">
            <div class="loader-pendulums"></div>
        </div>
    <!-- /Preloader -->
        <div id="index"></div>
        <script src="{{ asset('js/app.js') }}"></script>
        <!-- /HK Wrapper -->

		<!-- JavaScript -->

		<!-- jQuery -->
		<script src="{{ asset('vendors/jquery/dist/jquery.min.js')}}"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="{{ asset('vendors/popper.js/dist/umd/popper.min.js')}}"></script>
        <script src="{{ asset('vendors/bootstrap/dist/js/bootstrap.min.js')}}"></script>

        <!-- Slimscroll JavaScript -->
        <script src="{{ asset('assets/js/jquery.slimscroll.js')}}"></script>

        <!-- Fancy Dropdown JS -->
        <script src="{{ asset('assets/js/dropdown-bootstrap-extended.js')}}"></script>

        <!-- FeatherIcons JavaScript -->
        <script src="{{ asset('assets/js/feather.min.js')}}"></script>

        <!-- Init JavaScript -->
        <script src="{{ asset('assets/js/init.js')}}"></script>
    </body>
</html>
