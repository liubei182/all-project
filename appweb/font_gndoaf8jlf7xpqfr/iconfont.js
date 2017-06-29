;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M821.129 454.944H543.324V177.17100000000005c0-23.943-19.387-43.359-43.346-43.359-23.968 0-43.352 19.416-43.352 43.359v277.773H178.871c-23.969 0-43.352 19.416-43.352 43.359 0 23.93 19.383 43.346 43.352 43.346h277.756v277.787c0 23.926 19.384 43.344 43.352 43.344 23.959 0 43.346-19.418 43.346-43.344V541.649h277.805c23.969 0 43.352-19.416 43.352-43.346C864.48 474.36 845.098 454.944 821.129 454.944z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.952 955.3951c-246.0099 0-445.44-199.4342-445.44-445.4472 0-246.0058 199.4301-445.4369 445.44-445.4369 246.0129 0 445.44 199.4301 445.44 445.4369C955.392 755.9608 755.9649 955.3951 509.952 955.3951zM509.952 148.0356c-199.8828 0-361.9174 162.0378-361.9174 361.9133 0 93.4769 35.7417 178.3972 93.9131 242.6153 52.4206-25.3532 33.1725-4.2486 101.7518-32.4833 70.1778-28.8522 86.8035-38.912 86.8035-38.912l0.6656-66.4996c0 0-26.2902-19.9557-34.4535-82.5283-16.4485 4.7165-21.8798-19.1683-22.8516-34.3716-0.8765-14.6872-9.516-60.5665 10.5482-56.4275-4.1052-30.633-7.0482-58.2564-5.6074-72.8965 5.0299-51.3782 54.8854-105.0522 131.6844-108.9679 90.3291 3.9076 126.1076 57.556 131.1242 108.927 1.4694 14.6412-1.7531 42.2902-5.8655 72.8699 20.0765-4.0847 11.35 41.7188 10.3711 56.407-0.8827 15.2115-6.4348 39.0144-22.8434 34.2958-8.1981 62.5725-34.4873 82.3788-34.4873 82.3788l0.6185 66.1545c0 0 16.6185 9.4198 86.8024 38.273 68.5814 28.2266 49.3251 8.3743 101.7416 33.7869 58.1755-64.2243 93.9203-149.1436 93.9203-242.6214C871.8715 310.0723 709.8348 148.0356 509.952 148.0356z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M792.819712 566.833152l109.868032-251.779072c5.387264-12.376064 4.369408-26.2144-2.715648-37.010432-6.89664-10.528768-18.260992-16.56832-31.178752-16.56832L350.844928 261.475328l-8.363008-37.351424c-6.396928-28.826624-34.958336-51.408896-65.022976-51.408896L144.917504 172.715008c-14.544896 0-26.37824 11.833344-26.37824 26.37824 0 14.54592 11.833344 26.379264 26.37824 26.379264l132.542464 0c5.588992 0 12.409856 5.098496 13.52192 10.129408l100.713472 448.893952c-32.521216 12.913664-54.491136 45.618176-54.491136 81.168384 0 47.593472 38.720512 86.31296 86.31296 86.31296 47.597568 0 86.320128-38.720512 86.320128-86.31296 0-10.98752-2.081792-21.761024-6.102016-31.840256l178.471936 0c-4.021248 10.082304-6.10304 20.854784-6.10304 31.840256 0 47.593472 38.720512 86.31296 86.313984 86.31296 47.598592 0 86.324224-38.720512 86.324224-86.31296 0-47.594496-38.724608-86.313984-86.324224-86.313984-5.64224 0-317.648896 0-317.648896 0l-18.8928-82.701312 320.191488 0C765.970432 596.64896 785.19808 584.382464 792.819712 566.833152zM766.570496 732.418048c16.659456 2.052096 29.415424 16.262144 29.415424 33.246208 0 18.502656-15.058944 33.55648-33.567744 33.55648-18.502656 0-33.55648-15.0528-33.55648-33.55648 0-14.42816 9.401344-27.33056 23.021568-31.840256C751.883264 733.824 759.109632 731.313152 766.570496 732.418048zM362.65472 314.232832l482.83648 0-100.221952 229.66272L414.058496 543.895552 362.65472 314.232832zM423.51616 799.220736c-18.502656 0-33.55648-15.0528-33.55648-33.55648 0-16.80896 12.60032-30.997504 29.064192-33.212416 6.943744-0.456704 15.035392 1.37216 15.035392 1.37216 13.620224 4.506624 23.020544 17.410048 23.020544 31.840256C457.080832 784.166912 442.023936 799.220736 423.51616 799.220736z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-erweima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M152.075264 123.511808c101.716992 0 203.435008 0 305.152 0 31.031296 3.073024 23.552 57.696256 23.552 93.184 0 63.742976 0 105.755648 0 168.96 0 36.721664 6.915072 81.729536-17.408 92.16-15.840256 6.793216-58.351616 2.048-78.848 2.048-56.271872 0-102.012928 0-161.792 0-37.400576 0-88.469504 8.927232-94.208-23.552 0-103.083008 0-206.164992 0-309.248C132.70528 135.544832 140.061696 127.200256 152.075264 123.511808zM194.059264 193.143808c0 73.387008 0 146.772992 0 220.16 73.387008 0 146.772992 0 220.16 0 0-74.411008 0-148.820992 0-223.232-73.044992 0-146.091008 0-219.136 0C193.890304 190.24384 193.9712 191.690752 194.059264 193.143808z"  ></path>' +
    '' +
    '<path d="M561.675264 123.511808c101.716992 0 203.435008 0 305.152 0 12.447744 4.61824 21.001216 13.1328 23.552 27.648 0 100.352 0 200.705024 0 301.056-2.792448 12.510208-9.324544 23.196672-21.504 26.624-19.904512 5.600256-52.977664 1.024-76.8 1.024-56.127488 0-102.14912 0-156.672 0-23.626752 0-58.642432 4.97664-77.824-1.024-27.077632-8.471552-19.456-61.329408-19.456-98.304 0-49.115136 0-106.445824 0-157.696C538.123264 180.148224 528.75264 129.476608 561.675264 123.511808zM603.659264 193.143808c0 73.387008 0 146.772992 0 220.16 73.387008 0 146.772992 0 220.16 0 0-74.411008 0-148.820992 0-223.232-73.044992 0-146.091008 0-219.136 0C603.490304 190.24384 603.5712 191.690752 603.659264 193.143808z"  ></path>' +
    '' +
    '<path d="M294.411264 257.655808c30.661632-5.786624 54.774784 14.930944 55.296 43.008 0.687104 37.025792-37.129216 57.365504-66.56 41.984C249.47712 325.050368 251.693056 265.71776 294.411264 257.655808z"  ></path>' +
    '' +
    '<path d="M704.011264 257.655808c72.223744-13.493248 70.839296 100.886528 0 89.088C658.929664 339.23584 657.47456 266.350592 704.011264 257.655808z"  ></path>' +
    '' +
    '<path d="M455.179264 895.607808c-100.692992 0-201.385984 0-302.08 0-12.540928-3.843072-21.01248-11.75552-24.576-24.576 0-102.740992 0-205.483008 0-308.224 2.982912-9.019392 9.868288-19.542016 20.48-22.528 20.0448-5.640192 52.7872-1.024 76.8-1.024 55.189504 0 105.184256 0 156.672 0 23.154688 0 56.85248-5.168128 77.824 1.024 28.371968 8.37632 20.48 60.376064 20.48 97.28 0 56.7296 0 105.121792 0 162.816C480.779264 840.206336 489.356288 892.051456 455.179264 895.607808zM194.059264 608.887808c0 73.388032 0 146.772992 0 220.16 73.387008 0 146.772992 0 220.16 0 0-74.411008 0-148.820992 0-223.232-73.044992 0-146.091008 0-219.136 0C193.890304 605.98784 193.9712 607.434752 194.059264 608.887808z"  ></path>' +
    '' +
    '<path d="M890.379264 566.903808c0 28.672 0 57.344 0 86.016-2.388992 29.014016-0.342016 62.462976-1.024 93.184-72.704 0-145.408 0-218.112 0 0-16.724992 0-33.451008 0-50.176-20.481024-2.387968-45.395968-0.342016-67.584-1.024-2.388992 64.854016-0.340992 134.142976-1.024 200.704-13.312 0-26.624 0-39.936 0-34.337792-6.882304-24.576-58.407936-24.576-99.328 0-57.078784 0-104.042496 0-158.72 0-23.865344-4.830208-59.64288 1.024-78.848 6.984704-22.913024 37.274624-19.456 67.584-19.456 51.24096 0 96.891904 0 148.48 0 0 45.396992 0 90.795008 0 136.192 22.868992 0 45.739008 0 68.608 0 0.681984-45.056-1.364992-92.841984 1.024-136.192C857.858048 537.302016 888.439808 537.783296 890.379264 566.903808z"  ></path>' +
    '' +
    '<path d="M299.531264 672.375808c32.740352-3.623936 59.804672 27.841536 47.104 62.464-17.604608 47.98976-101.778432 29.953024-86.016-30.72C264.976384 687.348736 277.561344 674.807808 299.531264 672.375808z"  ></path>' +
    '' +
    '<path d="M744.971264 895.607808c-24.576 0-49.152 0-73.728 0 0.681984-26.284032-1.363968-55.294976 1.024-79.872 24.235008 0 48.468992 0 72.704 0C744.971264 842.359808 744.971264 868.983808 744.971264 895.607808z"  ></path>' +
    '' +
    '<path d="M890.379264 815.735808c0 17.408 0 34.816 0 52.224-2.84672 14.56128-11.36128 23.45472-24.576 27.648-17.408 0-34.816 0-52.224 0 0.681984-26.284032-1.363968-55.294976 1.024-79.872C839.862272 815.735808 865.120256 815.735808 890.379264 815.735808z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M755.608533 932.927795 268.394537 932.927795c-28.85637 0-52.204058-20.154016-52.204058-44.995797L216.190479 107.928105c0-24.840758 23.347688-44.995797 52.204058-44.995797l487.213997 0c28.852277 0 52.200988 20.154016 52.200988 44.995797l0 780.003893C807.808498 912.773779 784.46081 932.927795 755.608533 932.927795zM511.999488 887.931998c19.203128 0 34.803046-13.4575 34.803046-30.008454 0-16.549931-15.599919-30.007431-34.803046-30.007431-19.200058 0-34.798953 13.4575-34.798953 30.007431C477.199512 874.474498 492.799431 887.931998 511.999488 887.931998zM755.608533 152.923902l-17.401012 0L285.791455 152.923902l-17.397942 0 0 629.996414 17.397942 0 452.415044 0 17.401012 0L755.60751 152.923902z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.904 96 357.12 96C315.264 96 281.024 127.2 281.024 165.344l0 693.344c0 38.144 34.24 69.344 76.096 69.344l334.784 0C733.76 928 768 896.8 768 858.656L768 165.344C768 127.2 733.76 96 691.904 96M478.88 151.456l91.296 0c8.384 0 15.232 6.176 15.232 13.856 0 7.648-6.848 13.856-15.232 13.856l-91.296 0c-8.416 0-15.232-6.208-15.232-13.856C463.68 157.664 470.496 151.456 478.88 151.456M524.544 900.256c-25.248 0-45.664-18.592-45.664-41.6 0-23.008 20.416-41.6 45.664-41.6 25.216 0 45.664 18.592 45.664 41.6C570.176 881.664 549.76 900.256 524.544 900.256M737.6 789.344 311.488 789.344 311.488 234.656 737.6 234.656 737.6 789.344z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fankui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M720.559 544.117c-10.597 0-19.187 8.59-19.187 19.187v229.293c0 2.456-0.938 4.91-2.81 6.784-1.874 1.872-4.328 2.81-6.784 2.81h-477.1c-2.455 0-4.911-0.938-6.784-2.81-1.874-1.874-2.81-4.328-2.81-6.784v-547.705c0-2.455 0.937-4.911 2.81-6.784 1.874-1.874 4.328-2.81 6.784-2.81h431.975c10.597 0 19.187-8.59 19.187-19.187s-8.59-19.187-19.187-19.187h-460.755c-10.597 0-19.187 8.59-19.187 19.187v605.266c0 10.597 8.59 19.187 19.187 19.187h534.661c10.597 0 19.187-8.59 19.187-19.187v-258.074c0-10.597-8.59-19.187-19.187-19.187z"  ></path>' +
    '' +
    '<path d="M539.752 670.895l383.611-383.627-132.322-132.322-383.629 383.63 132.339 132.32zM869.094 287.269l-329.345 329.359-78.068-78.053 329.359-329.359 78.053 78.053z"  ></path>' +
    '' +
    '<path d="M378.792 553.752v145.91h146.046v-38.374h-107.672v-107.535z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.142981 930.646845c-5.895267 0-11.791557-1.819438-16.872273-5.457292C193.223235 708.812481 64.775794 534.361287 64.775794 341.844645c0-148.077523 96.898911-259.747859 225.347374-259.747859 113.896026 0 184.266747 56.258305 221.019813 108.596324 36.68962-52.369741 107.123786-108.596324 221.018789-108.596324 128.447441 0 225.347374 111.670336 225.347374 259.747859 0 192.483896-128.446417 366.967836-429.495938 583.344908C522.933515 928.827407 517.038248 930.646845 511.142981 930.646845zM290.123168 139.922796c-95.520517 0-167.521365 86.802972-167.521365 201.922872 0 168.30624 116.466572 325.728596 388.541177 524.20088 272.071535-198.472284 388.540154-355.926362 388.540154-524.20088 0-115.119901-72.063269-201.922872-167.521365-201.922872-152.281265 0-191.856609 117.253494-193.424314 122.239042-3.889587 11.948123-15.051811 20.10285-27.595498 20.10285l-0.125867 0c-12.606109-0.063445-23.707958-8.217149-27.471678-20.258393C481.976708 257.17629 442.40341 139.922796 290.123168 139.922796z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M801.04665 945.698656"  ></path>' +
    '' +
    '<path d="M80.899006 350.620519"  ></path>' +
    '' +
    '<path d="M600.82963 618.637716l-29.29521 0c-11.238972 0-20.433378 3.588735-20.433378 14.838963l0 20.405749c0 11.282974 9.193383 20.408819 20.433378 20.408819l50.446949 0c0 0 2.089591 0.104377 0 0l0 0c11.779278 0 27.52489-5.835915 32.142048-21.971407l106.754373-429.602362 20.24202 0c11.30037 0 19.49296-6.341429 19.49296-17.619286l0-20.417005c0-11.266601-9.115612-20.37505-20.414959-20.37505l0 0-43.481304 0 0 0c-11.676947-0.954745-26.41358 5.925966-29.863145 20.862143"  ></path>' +
    '' +
    '<path d="M656.781966 386.417817 636.564505 468.008067 656.781966 386.417817Z"  ></path>' +
    '' +
    '<path d="M655.485437 723.06202c-45.063335 0-81.636299 36.498262-81.636299 81.566714 0 45.089941 36.572964 81.622996 81.636299 81.622996 45.026496 0 81.585133-36.532031 81.585133-81.622996C737.069547 759.560282 700.511933 723.06202 655.485437 723.06202L655.485437 723.06202z"  ></path>' +
    '' +
    '<path d="M655.485437 712.828958"  ></path>' +
    '' +
    '<path d="M93.650425 382.440226l588.665077 0c15.616676 0 28.272927-12.643971 28.272927-28.262694 0-15.639189-12.656251-28.285207-28.272927-28.285207L93.650425 325.892325c-15.639189 0-28.26781 12.646018-28.26781 28.285207C65.382615 369.796254 78.011236 382.440226 93.650425 382.440226L93.650425 382.440226z"  ></path>' +
    '' +
    '<path d="M154.28848 525.625322l477.990418 0c15.618723 0 28.27395-12.646018 28.27395-28.263717 0-15.640212-12.655228-28.284183-28.27395-28.284183L154.28848 469.077422c-15.639189 0-28.26781 12.643971-28.26781 28.284183C126.02067 512.979304 138.649292 525.625322 154.28848 525.625322L154.28848 525.625322z"  ></path>' +
    '' +
    '<path d="M218.617601 673.428599l406.055063 0c15.616676 0 28.271904-12.650111 28.271904-28.269857 0-15.637142-12.655228-28.27702-28.271904-28.27702L218.617601 616.881722c-15.638165 0-28.26781 12.639878-28.26781 28.27702C190.349791 660.778488 202.978413 673.428599 218.617601 673.428599L218.617601 673.428599z"  ></path>' +
    '' +
    '<path d="M237.060649 768.044514c-26.046213 0-47.127344 21.097504-47.127344 47.13246 0 26.016537 21.082154 47.114041 47.127344 47.114041 26.015513 0 47.111994-21.097504 47.111994-47.114041C284.172643 789.142018 263.075139 768.044514 237.060649 768.044514L237.060649 768.044514z"  ></path>' +
    '' +
    '<path d="M780.985756 221.733057l151.506623 0c15.618723 0 28.27395-12.648065 28.27395-28.268834 0-15.636119-12.655228-28.279067-28.27395-28.279067L780.985756 165.185156c-15.639189 0-28.26781 12.641925-28.26781 28.279067 0 15.620769 18.163685 28.268834 33.80185 28.268834L780.985756 221.733057z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M882.509499 277.375332c-13.078877-17.029862-33.770128-29.980825-56.760748-29.980825l-572.302411 0-5.921873-45.067428c-4.325515-33.225729-32.791847-59.662845-69.218478-59.662845l-32.492018 0c-9.630335 0-17.438161 7.983835-17.438161 17.622356 0 9.639544 7.80885 17.622356 17.438161 17.622356l32.492018 0c14.407128 0 32.126698 8.15268 34.630728 27.396977l66.586534 509.547135c4.427846 33.974789 33.531698 55.18281 69.217455 55.18281l442.300568 0c9.639544 0 17.438161-7.480368 17.438161-17.118889 0-9.639544-7.79964-17.118889-17.438161-17.118889L348.740706 735.798089c-18.222013 0-32.467459-10.112312-34.630728-26.750247l-5.614881-42.733267 440.60188 0c32.476669 0 59.621912-17.790178 67.523883-47.489594l76.650751-283.098683C898.653177 315.560002 894.736984 293.28058 882.509499 277.375332zM859.586416 326.703807l-76.668147 283.718807c-3.848655 14.458293-17.114796 20.644179-33.821293 20.644179L303.864636 631.066793l-45.785789-348.427574 567.669904 0c12.07399 0 22.683628 7.003508 29.103852 15.364943C860.506369 305.360709 862.175381 316.979328 859.586416 326.703807zM411.625942 837.310064c0 20.974707-17.003256 37.97694-37.97694 37.97694s-37.97694-17.003256-37.97694-37.97694 17.003256-37.97694 37.97694-37.97694S411.625942 816.335357 411.625942 837.310064zM776.252453 837.310064c0 20.974707-17.003256 37.97694-37.97694 37.97694s-37.97694-17.003256-37.97694-37.97694 17.003256-37.97694 37.97694-37.97694S776.252453 816.335357 776.252453 837.310064z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao49" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M975.0784 406.1952c-2.0224-6.2976-7.168-11.1104-13.6192-12.6976l-280.2688-69.7088-152.8832-245.0176c-7.04-11.2384-25.5488-11.2384-32.5888 0l-152.8832 245.0176L62.5408 393.4976c-6.4512 1.6128-11.5968 6.4-13.6192 12.6976-2.048 6.2976-0.6912 13.2096 3.5584 18.2784l185.7792 221.1072L217.9328 933.7088c-0.4864 6.6048 2.5088 12.9792 7.8848 16.896 5.3504 3.8912 12.3136 4.7616 18.4832 2.2528L512 844.4928l267.7248 108.3648c2.3296 0.9472 4.7872 1.408 7.1936 1.408 3.9936 0 7.9616-1.2544 11.264-3.6608 5.376-3.8912 8.3456-10.2656 7.8848-16.896l-20.3264-288.1024 185.7792-221.1072C975.7696 419.4048 977.1264 412.4928 975.0784 406.1952zM751.36 626.8416c-3.2 3.8144-4.8128 8.7296-4.4544 13.696l18.688 265.1648-246.4-99.7376c-2.304-0.9472-4.7616-1.408-7.1936-1.408s-4.8896 0.4608-7.1936 1.408l-246.4 99.7376 18.688-265.1648c0.3584-4.9664-1.2544-9.8816-4.4544-13.696l-170.9824-203.4944 257.9456-64.1536c4.8384-1.2032 9.0368-4.2496 11.6736-8.4736L512 125.2352l140.6976 225.5104c2.6624 4.224 6.8352 7.2704 11.6736 8.4736l257.9456 64.1536L751.36 626.8416z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaolaba" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1.861394 300.69648l0 423.811472 241.264902 0 361.172853 296.335149 0.214894-1016.748852-361.227088 296.603255L1.861394 300.697503 1.861394 300.69648zM742.993978 251.960499c-21.200858-20.87954-54.801117-20.87954-76.002998 0.160659-20.986987 20.986987-20.986987 54.908564 0.107447 75.948763l0-0.107447c46.320978 46.37419 74.92955 110.032022 74.92955 180.666756 0 70.474075-28.501124 133.970224-74.875315 180.237991-21.147646 21.094434-21.147646 54.961776-0.053212 76.216869 10.358929 10.466376 24.099884 15.72617 37.947264 15.72617s27.963888-5.259794 38.054711-15.72617c65.536622-65.536622 106.22123-156.51366 106.22123-256.294201C849.375867 408.52737 808.476365 317.442886 742.993978 251.960499zM866.176508 128.832204c-21.200858-20.986987-54.801117-20.986987-75.895551 0-21.093411 20.986987-21.093411 55.016011 0 75.895551 77.880765 77.880765 126.34864 185.014784 126.34864 303.849286 0 118.78129-48.038086 225.806839-126.241192 303.796074-21.255093 20.87954-21.255093 54.801117 0 75.841316 10.090822 10.358929 24.207331 15.780405 38.054711 15.780405 13.740956 0 27.910677-5.421476 37.947264-15.780405 97.203856-97.203856 157.694555-231.603869 157.587108-379.63739C1023.49551 360.543519 963.326129 225.821165 866.176508 128.832204z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M381.165186 590.786391c-91.952248-56.039317-145.073096-134.768403-148.307767-243.167229-2.266623-75.960019 23.532973-141.870148 75.865875-196.708104C423.543366 30.594809 606.66094 33.771151 719.068056 155.287739c119.122051 128.777969 86.22685 352.063381-76.765361 435.728896 7.951089 3.470031 15.092743 6.631024 22.268166 9.712199 112.555495 48.321542 190.227506 130.027425 230.966349 245.765403 9.261944 26.312272 13.139252 54.55757 19.008936 82.016968 1.00898 4.720511 0.298805 10.147104-0.883113 14.934131-2.949168 11.954263-11.441587 18.191314-22.964014 17.817808-12.226462-0.397043-21.088294-7.831362-23.585161-19.709901-4.691859-22.317285-7.268544-45.351907-14.476713-66.821895-45.75509-136.273686-137.496537-222.568075-279.922341-247.998257-122.007775-21.784142-228.086765 13.602809-315.907926 101.508905-56.93778 56.992015-88.920192 126.557394-99.447966 206.26476-1.988284 15.052834-8.006348 23.602557-19.126616 26.323529-16.812921 4.114714-31.145347-8.580422-29.467125-26.329668 6.036483-63.86454 26.680663-122.737392 61.452607-176.449711 47.130414-72.802096 111.054305-125.504412 191.192483-158.399613 5.142114-2.111081 10.194176-4.442172 15.281031-6.685259C377.651153 592.543408 378.581338 592.049151 381.165186 590.786391zM511.632633 572.410881c126.089743 0.030699 227.637534-101.603049 229.544977-225.201042C743.253898 212.605166 636.475989 115.088178 517.492084 111.997793c-124.541481-3.234671-233.487775 96.110965-235.544621 226.542596C279.93155 466.382033 382.093325 572.373019 511.632633 572.410881z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M96.269577 449.359334l829.613778 0c17.619286 0 31.908734 14.288424 31.908734 31.907711l0 63.816444c0 17.626449-14.288424 31.908734-31.908734 31.908734L96.269577 576.992223c-17.619286 0-31.907711-14.282285-31.907711-31.908734l0-63.816444C64.361867 463.647759 78.650291 449.359334 96.269577 449.359334z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiajiantou1-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M532.915867 648.339178c0.166799-0.165776 0.309038-0.346901 0.470721-0.51677L737.804281 445.028703c9.706059-9.624195 9.769504-25.28078 0.13917-34.983769-9.623171-9.708106-25.279756-9.770528-34.982746-0.13917L515.605619 595.766822 329.745584 408.416853c-9.629311-9.708106-25.285896-9.770528-34.986839-0.140193-4.851495 4.811586-7.296173 11.130502-7.321756 17.46272-0.024559 6.328126 2.368954 12.668531 7.182586 17.520025l202.800869 204.426903c0.156566 0.167822 0.295735 0.346901 0.458441 0.511653 4.820796 4.857635 11.150968 7.299243 17.489326 7.317663C521.705548 655.54837 528.056186 653.15895 532.915867 648.339178z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuandian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512m-130.4654 0a127.494 127.494 0 1 0 260.930801 0 127.494 127.494 0 1 0-260.930801 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontcaidan-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M251.254418 224.735437l695.848215 0 0 52.188616-695.848215 0 0-52.188616ZM251.254418 485.678518l695.848215 0 0 52.188616-695.848215 0 0-52.188616ZM251.254418 746.621599l695.848215 0 0 52.188616-695.848215 0 0-52.188616ZM77.292364 224.735437l52.188616 0 0 52.188616-52.188616 0 0-52.188616ZM77.292364 485.678518l52.188616 0 0 52.188616-52.188616 0 0-52.188616ZM77.292364 746.621599l52.188616 0 0 52.188616-52.188616 0 0-52.188616Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhuidingbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M483.15658 75.685773 483.15658 75.685773c16.838503-16.839527 44.379767-16.839527 61.219293 0l367.407857 367.408881c16.839527 16.838503 16.839527 44.379767 0 61.219293l0 0c-16.838503 16.839527-44.38079 16.839527-61.219293 0l-367.407857-367.408881C466.317053 120.151497 466.317053 92.614327 483.15658 75.685773L483.15658 75.685773zM483.15658 75.685773"  ></path>' +
    '' +
    '<path d="M544.375873 75.685773 544.375873 75.685773c16.838503 16.838503 16.838503 44.379767 0 61.219293L177.057043 504.312924c-16.839527 16.839527-44.38079 16.839527-61.219293 0l0 0c-16.839527-16.839527-16.839527-44.38079 0-61.219293L483.240491 75.685773C499.99406 58.931181 527.535323 58.931181 544.375873 75.685773L544.375873 75.685773zM544.375873 75.685773"  ></path>' +
    '' +
    '<path d="M349.402273 709.463304 116.625696 709.463304c-11.926634 0-21.575388-9.648754-21.575388-21.575388 0-11.932774 9.734712-21.667485 21.665439-21.667485l232.686527 0c11.926634 0 21.665439 9.734712 21.665439 21.667485C371.067712 699.81455 361.328907 709.463304 349.402273 709.463304L349.402273 709.463304zM349.402273 709.463304"  ></path>' +
    '' +
    '<path d="M233.013473 961.180256c-11.926634 0-21.666462-9.734712-21.666462-21.661346L211.347011 706.82829c0-11.926634 9.739828-21.661346 21.666462-21.661346 11.927657 0 21.665439 9.734712 21.665439 21.661346l0 232.691643C254.678912 951.446567 244.94113 961.180256 233.013473 961.180256L233.013473 961.180256zM233.013473 961.180256"  ></path>' +
    '' +
    '<path d="M701.89749 961.180256c-11.926634 0-21.661346-9.734712-21.661346-21.661346L680.236144 691.921789c0-11.93175 9.734712-21.666462 21.661346-21.666462s21.665439 9.734712 21.665439 21.666462l0 247.597121C723.472877 951.446567 713.824123 961.180256 701.89749 961.180256L701.89749 961.180256zM701.89749 961.180256"  ></path>' +
    '' +
    '<path d="M910.203746 844.792479c-11.926634 0-21.661346-9.734712-21.661346-21.661346L888.5424 691.921789c0-11.93175 9.734712-21.666462 21.661346-21.666462s21.575388 9.734712 21.575388 21.666462l0 131.209344C931.779134 835.057767 922.13038 844.792479 910.203746 844.792479L910.203746 844.792479zM910.203746 844.792479"  ></path>' +
    '' +
    '<path d="M910.203746 709.463304 701.89749 709.463304c-11.926634 0-21.661346-9.738805-21.661346-21.665439 0-11.927657 9.734712-21.667485 21.661346-21.667485L910.203746 666.13038c11.926634 0 21.665439 9.739828 21.665439 21.667485C931.869185 699.724499 922.13038 709.463304 910.203746 709.463304L910.203746 709.463304zM910.203746 709.463304"  ></path>' +
    '' +
    '<path d="M910.203746 852.339362 701.89749 852.339362c-11.926634 0-21.661346-9.739828-21.661346-21.666462s9.734712-21.666462 21.661346-21.666462L910.203746 809.006438c11.926634 0 21.665439 9.739828 21.665439 21.666462S922.13038 852.339362 910.203746 852.339362L910.203746 852.339362zM910.203746 852.339362"  ></path>' +
    '' +
    '<path d="M571.038116 960.217325 458.775286 960.217325c-34.296107 0-62.098313-27.891234-62.098313-62.09729L396.676973 729.282698c0-34.296107 27.889187-62.099337 62.098313-62.099337l112.347764 0c34.296107 0 62.098313 27.89328 62.098313 62.099337l0 168.837336C633.13643 932.416142 605.3332 960.217325 571.038116 960.217325L571.038116 960.217325zM458.775286 708.495256c-11.405771 0-20.787442 9.296737-20.787442 20.787442l0 168.837336c0 11.399631 9.296737 20.787442 20.787442 20.787442l112.347764 0c11.405771 0 20.787442-9.298783 20.787442-20.787442L591.910493 729.282698c0-11.401678-9.29776-20.787442-20.787442-20.787442L458.775286 708.495256 458.775286 708.495256zM458.775286 708.495256"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangzuojiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M746.112 130.848 335.3344 511.9744l410.7776 381.184c10.592 9.8048 10.592 25.4784 0 35.1616-10.4704 9.7408-27.3536 9.7408-37.824 0L302.8928 552.16c-35.7632-29.6512-23.6032-19.968-25.3568-21.664-5.504-5.0816-7.9296-11.8016-7.5648-18.5152-0.3648-6.656 2.0544-13.376 7.6224-18.4576 1.7536-1.696 54.8288-49.8048 56.8832-50.9568l373.8624-346.9376c10.4704-9.6832 27.3536-9.6832 37.824 0C756.704 105.4336 756.704 121.1072 746.112 130.848L746.112 130.848z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.79962 756.858754c11.796674 0 21.35947-9.44307 21.35947-21.281699l0-29.66974c0-11.753695-9.725502-21.281699-21.35947-21.281699L169.683611 684.625616c-11.796674 0-21.35947 9.44307-21.35947 21.281699l0 29.66974c0 11.753695 9.725502 21.281699 21.35947 21.281699L853.79962 756.858754zM148.32414 494.556723c0 11.746532 9.725502 21.268396 21.35947 21.268396L853.79962 515.825119c11.796674 0 21.35947-9.56075 21.35947-21.268396l0-28.350698c0-11.746532-9.725502-21.268396-21.35947-21.268396L169.683611 444.937628c-11.796674 0-21.35947 9.56075-21.35947 21.268396L148.32414 494.556723zM148.32414 251.996314c0 11.753695 9.725502 21.281699 21.35947 21.281699L853.79962 273.278014c11.796674 0 21.35947-9.44307 21.35947-21.281699L875.15909 222.326575c0-11.753695-9.725502-21.281699-21.35947-21.281699L169.683611 201.044876c-11.796674 0-21.35947 9.44307-21.35947 21.281699L148.32414 251.996314z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyoujiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.6003 213.800623c-138.851102-138.915088-364.020238-138.915088-502.935326 0s-138.915088 364.084225 0 502.935326a355.573996 355.573996 0 0 0 502.935326 0 355.573996 355.573996 0 0 0 0-502.935326z m-580.359212 580.359212a465.183184 465.183184 0 1 1 657.783099 0 465.183184 465.183184 0 0 1-657.783099 0z m868.939152 211.156054a63.474789 63.474789 0 0 1-89.837303 0l-89.773316-89.837303a63.410803 63.410803 0 1 1 89.773316-89.773316l89.837303 89.773316a63.346816 63.346816 0 0 1 0 89.837303z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-heart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.301082 862.823134l-31.807427-24.410969c-187.147354-144.984069-300.323996-232.270041-364.6787-346.18551C67.473741 408.639934 54.898331 325.792041 77.8296 253.300007c19.23304-60.656475 63.614853-109.47739 124.271328-137.586588 31.067576-14.054087 65.094554-21.451568 100.601232-21.451568 85.067444 0 165.695786 42.163285 208.598922 107.99769 43.642986-65.834404 124.271328-107.99769 209.338772-107.99769 35.506678 0 69.532633 7.397481 100.601232 21.451568 60.656475 28.109198 105.039311 76.930113 124.271328 137.586588 23.671119 72.492034 10.355859 155.339928-36.985356 238.927671-64.354704 113.915469-178.271196 201.941292-366.158401 346.925361L511.301082 862.823134zM302.70216 127.548978c-31.067576 0-59.916625 5.91778-86.546122 18.49319-51.780317 24.410969-90.245374 65.834404-106.519012 117.614721-20.711717 62.876026-8.876158 136.846738 34.026978 212.297151 61.396325 107.99769 172.353416 194.544835 357.281219 336.569502l11.095709 8.876158 10.355859-8.136308c184.927803-142.764518 295.884894-228.571812 357.281219-336.569502 42.903136-75.450413 54.738695-148.682297 34.026978-212.297151-17.013489-51.780317-54.738695-93.203752-106.519012-117.614721-26.629497-12.57541-56.218396-18.49319-86.546122-18.49319-83.587744 0-161.257707 46.602388-193.804984 116.13502l-15.533788 31.807427-15.533788-32.547277C463.959867 174.150342 386.289903 127.548978 302.70216 127.548978z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiasanjiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256.204389 384.30607L512.410832 704.565408 768.617276 384.30607Z" fill="#BFBFBF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)