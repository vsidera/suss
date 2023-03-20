import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from "../../components/table/table"
import AdminSidebar from "../../components/adminSidebar/adminSidebar";
import {servicesAction} from "../../actions/services/servicesAction"
import CreateServiceModal from "../../components/modals/create_service";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const getMuiTheme = () =>
  createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
            fontFamily: "Ubuntu",
            fontWeight: "inherit",
          },
          footer: {
            border: 0,
          },
        },
      },
      //@ts-ignore
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            textAlign: "center",
            alignItems: "center",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            // fontFamily: 'Ubuntu',
            color: "#ffffff",
            justifyContent: "start",
            // fontWeight: 'bold',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          regular: {
            ["@media (min-width:600px)"]: {
              // eslint-disable-line no-useless-computed-key
              paddingLeft: "0px",
              paddingRight: "0px",
              // minHeight:'3px',
              marginBottom: "2px",
              marginTop: "0px",
            },
          },
        },
      },

      //@ts-ignore
      MUIDataTableSelectCell: {
        styleOverrides: {
          headerCell: {
            backgroundColor: "#5f6062",
            color: "wh",
          },
        },
      },

      MUIDataTable: {
        styleOverrides: {
          responsiveBase: {
            position: "relative",
            height: "auto",
            borderRadius: "18px",
            border: "1px solid #f2f2f2",
            boxShadow: "0 0 6px 4px #efefef",
          },
        },
      },
      MUIDataTablePagination: {
        styleOverrides: {
          navContainer: {
            border: 0,
            boxShadow: "0 ",
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          title: {
            fontFamily: "Ubuntu",
            display: "flex",
          },
          avatar: {
            paddingLeft: 26,
            fontFamily: "Ubuntu",
          },
        },
      },
    },
  });

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [createServiceModal, setCreateServiceModal] = useState(false);

  const closeCreateServiceModal = (e) => {
    e.preventDefault();
    setCreateServiceModal(false)
  }

  const getServices = () => {
    servicesAction()
      .then((res) => {
        if (res.errors) {
          console.log("AN ERROR HAS OCCURED");
        } else {
          setServices(res.data);
          setIsLoaded(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getServices();
  }, []);

  const columns = [
    {
     name: "sender",
     label: "Sender",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "provider",
     label: "Provider",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "status",
     label: "Status",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "country_code",
     label: "Country",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];

  const options = {
    filter: false,
    filterType: 'textField',
    responsive: 'standard',
    print: false,
    tableId: "03009226196169874",
    fixedHeader: true,
    fontFamily: 'Ubuntu',
    viewColumns: false,
    selectableRows: "none",
    fixedSelectColumn: true,
    tableBodyHeight: 'auto',
    enableNestedDataAccess: '.',
    elevation: 0,
    count: 30,
    rowsPerPageOptions: [10, 20, 50],
    downloadOptions: {
      separator: ',',
      filename: 'Customers Summary.csv',
      filterOptions: {
        useDisplayedColumnsOnly: false, // it was true
        useDisplayedRowsOnly: false, // it was true
      },
    },
    downloadFile: true,
    onDownload: (buildHead, buildBody, columns, data) => {
      let val = `${buildHead(columns)}${buildBody(data)}`.replace(/[^\x00-\x7F]/g, "").toString().trim();
      return val;
    },
   
    textLabels: {
      body: {
        noMatch: isLoaded ? "Sorry, no matching records exist in Suss"
          : <div >
            ......
          </div>,
        toolTip: "Sort",
      },
      pagination: {
        next: "Next Page",
        previous: "Previous Page",
        rowsPerPage: "Rows per page:",
        displayRows: "of",
      },
      toolbar: {
        search: "Search A/C Number,Name or Payplans",
        downloadCsv: "Download Loans Excel List",
        print: "Print customers",
        viewColumns: "View Columns",
        filterTable: "Filter Table",
      },
      setFilterChipProps: () => {
        return {
          color: 'primary',
          variant: 'outlined',
          className: 'testClass123',
        };
      },
      viewColumns: {
        title: "Show Columns",
        titleAria: "Show/Hide Table Columns",
      },
      selectedRows: {
        text: "record(s) selected",
        delete: "Delete",
        deleteAria: "Delete Selected Records",
      },
    }
  }

  return (
    <AdminSidebar>
    <CreateServiceModal createServiceModal={createServiceModal} closeCreateServiceModal={closeCreateServiceModal}/>
    <h1 className="text-2xl text-primary mb-6">All Servicess</h1>
    <h4 className="text-md text-primary">A list of all the services </h4>
    <div className="flex justify-end">
        <button
          type="button"
          className="text-white w-36 bg-[#5F6062] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2 mt-4 flex items-center mr-2"
          onClick={() =>setCreateServiceModal(true)}
        >
          <LibraryAddIcon />
          <p className="ml-4">Add Service</p>
        </button>
      </div>

    <div className="mt-4">
      <ThemeProvider theme={getMuiTheme()}>

        <Table columns={columns} options={options} data={services} />
      </ThemeProvider>
    </div>
    </AdminSidebar>
  );
};

export default AllServices;