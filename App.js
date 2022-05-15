import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import axios from 'axios';


export default function App(){


    const[title,setTitle]=useState('bookname');
    const[summary,setSummary]=useState('overview');
    const[author,setauthor]=useState('author');

    const[title1,setTitle1]=useState('bookname');
    const[summary1,setSummary1]=useState('overview');
    const[author1,setauthor1]=useState('author');

    const[title2,setTitle2]=useState('bookname');
    const[summary2,setSummary2]=useState('overview');
    const[author2,setauthor2]=useState('author');

    const[title3,setTitle3]=useState('bookname');
    const[summary3,setSummary3]=useState('overview');
    const[author3,setauthor3]=useState('author');

    const[title4,setTitle4]=useState('bookname');
    const[summary4,setSummary4]=useState('overview'); 
    const[author4,setauthor4]=useState('author');
    
    const[title5,setTitle5]=useState('bookname');
    const[summary5,setSummary5]=useState('overview');
    const[author5,setauthor5]=useState('author');
        axios({
            method: 'get',
            url: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AsNjhEveGJWlnamElmjGGZd8ynArDCik',
        }).then((response)=>{
            setTitle(response.data.results.books[0].title);
            setSummary(response.data.results.books[0].description);
            setauthor(response.data.results.books[0].author);

            setTitle1(response.data.results.books[1].title);
            setSummary1(response.data.results.books[1].description);
            setauthor1(response.data.results.books[1].author);

            setTitle2(response.data.results.books[2].title);
            setSummary2(response.data.results.books[2].description);
            setauthor2(response.data.results.books[2].author);

            setTitle3(response.data.results.books[3].title);
            setSummary3(response.data.results.books[3].description);
            setauthor3(response.data.results.books[3].author);

            setTitle4(response.data.results.books[4].title);
            setSummary4(response.data.results.books[4].description);
            setauthor4(response.data.results.books[4].author);

            setTitle5(response.data.results.books[5].title);
            setSummary5(response.data.results.books[5].description);
            setauthor5(response.data.results.books[5].author);
        });
    return(
        <View style={{alignContent:'center'}}>
          <ScrollView>
          <View style={styles.title}>
          <Text style={styles.content1}>Books details</Text>
   
          </View>

          <View>
          <Text style={styles.bookname}>{title}</Text>
          <Text>~by : </Text>
          <Text style={styles.authorname}> {author}</Text>
          <Text style={styles.gap1}>overview</Text>
          <Text style={styles.Gap}>{summary}</Text>
          </View>

          <View>
          <Text style={styles.bookname}>{title1}</Text>
          <Text>~by : </Text>
          <Text style={styles.authorname}> {author1}</Text>
          <Text style={styles.gap1}>overview</Text>
          <Text style={styles.Gap}>{summary1}</Text> 
          </View>

          <View>
          <Text style={styles.bookname}>{title2}</Text>
          <Text>~by : </Text>
          <Text style={styles.authorname}> {author2}</Text>
          <Text style={styles.gap1}>overview</Text>
          <Text style={styles.Gap}>{summary2}</Text>  
          </View>

          <View>
          <Text style={styles.bookname}>{title3}</Text>
          <Text>~by : </Text>
          <Text style={styles.authorname}> {author3}</Text>
          <Text style={styles.gap1}>overview</Text>
          <Text style={styles.Gap}>{summary3}</Text> 
          </View>

          <View>
          <Text style={styles.bookname}>{title4}</Text>
          <Text>~by : </Text>
          <Text style={styles.authorname}> {author4}</Text>
          <Text style={styles.gap1}>overview</Text>
          <Text style={styles.Gap}>{summary4}</Text> 
          </View>

          <View>
          <Text style={styles.bookname}>{title5}</Text>
          <Text>~by : </Text>
          <Text style={styles.authorname}> {author5}</Text>
          <Text style={styles.gap1}>overview</Text>
          <Text style={styles.Gap}>{summary5}</Text> 
          </View>
          </ScrollView>
          </View>
    );
}

const styles = StyleSheet.create({

    title:{
     
       width:500,
       height:120,
       backgroundColor:'lightcoral',
       paddingTop:50,
       paddingLeft:80, 
       marginBottom:30,   
    },
    content1:{ 
        alignContent:'center',
        marginLeft:35,
        fontSize:25,
        fontFamily: 'serif',
        color:'bisque',
    },
    gap1:{
        fontSize:20,
        marginBottom:20,
    },
    bookname:{
        fontSize:25,
        marginBottom:25,
        fontWeight:'bold',
        fontFamily: 'serif',
        color:'bisque',    
    },
    Gap:{
        margin:10,
        marginBottom:30,
        color:'lightcoral',
    },
    authorname:{
        fontFamily:'sans-serif',
        marginBottom:25,
        color:'brown',
    }
});
