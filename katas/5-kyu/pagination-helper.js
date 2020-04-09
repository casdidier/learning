class PaginationHelper {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    constructor(collection, itemsPerPage) {
        this.collection   = collection;
        this.itemsPerPage = itemsPerPage;
    }

    // returns the number of items within the entire collection
    itemCount() {
        return this.collection.length;
    }

    // returns the number of pages
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount() - 1) return -1;

        // if this is not the last page...
        if (pageIndex < this.pageCount() - 1) {
            return this.itemsPerPage;
        } else {
            return this.itemCount() - ((this.pageCount() - 1) * this.itemsPerPage);
        }
    }

    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    pageIndex(itemIndex) {
        if (this.itemCount() == 0 || itemIndex < 0 || itemIndex > this.itemCount()) return -1;
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
